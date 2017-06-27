var templateUrlRegex = /templateUrl\s*:(\s*['"`](.*?)['"`]\s*)/gm;
var stylesRegex = /styleUrls *:(\s*\[[^\]]*?\])/g;
var stringRegex = /(['`"])((?:[^\\]\\\1|.)*?)\1/g;

module.exports.translate = function(load){
  var url = document.createElement('a');
  url.href = load.address;
  console.log("Address   "+load.address);
  var basePathParts = url.pathname.split('/');

  basePathParts.pop();
  var basePath = basePathParts.join('/');

  var baseHref = document.createElement('a');
  baseHref.href = this.baseURL;
  baseHref = baseHref.pathname;

  basePath = basePath.replace(baseHref, '');

  var baseUrl = this.baseURL;

  load.source = load.source
    .replace(templateUrlRegex, function(match, quote, url){
      let resolvedUrl = url;

      if (url.startsWith('.')) {
        resolvedUrl = basePath + url.substr(1);
      }
      
      if (url.startsWith('app')) {
        resolvedUrl = baseUrl + url;
      }

      return 'templateUrl: "' + resolvedUrl + '"';
    })
    .replace(stylesRegex, function(match, relativeUrls) {
      var urls = [];

      while ((match = stringRegex.exec(relativeUrls)) !== null) {
        if (match[2].startsWith('.')) {
          urls.push('"' + basePath + match[2].substr(1) + '"');
        } else if (match[2].startsWith('app')) {
          urls.push('"' + baseUrl + match[2] + '"');
        } else {
          urls.push('"' + match[2] + '"');
        }
      }

      return "styleUrls: [" + urls.join(', ') + "]";
    });

  return load;
};
