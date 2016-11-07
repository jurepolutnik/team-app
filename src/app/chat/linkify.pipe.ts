import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Pipe({
  name: 'linkify'
})
export class LinkifyPipe implements PipeTransform {
  DomSanitazionService;

  constructor(private sanitizer: DomSanitizer) { }


  transform(value: any, args?: any): any {
    return this.sanitizer.bypassSecurityTrustHtml(this.linkify(value));
  }

  linkify(inputText) {
    var replacedText, replacePattern1, replacePattern2, replacePattern3;

    let pattern = /(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*))/gi;

    let match;
    let urls = [];
    let outputText = inputText;
    while (match = pattern.exec(inputText)) {
      urls.push(match[0])
    }

    let html = inputText.replace(pattern, '<a href="$1" target="_blank">$1</a>');

    urls.forEach(url => {
      let embeded = this.embed(url);
      if (embeded) html += '<br/>' + embeded;
    });

    return html;
  }

  embed(url) {
    var pattern1 = /(?:http?s?:\/\/)?(?:www\.)?(?:vimeo\.com)\/?(.+)/g;
    var pattern2 = /(?:http?s?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?(.+)/g;
    var pattern3 = /([-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?(?:jpg|jpeg|gif|png))/gi;

    // if (pattern1.test(url)) {
    //   var replacement = '<iframe width="300" src="//player.vimeo.com/video/$1" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
    //   return url.replace(pattern1, replacement);
    // }


    // if (pattern2.test(url)) {
    //   var replacement = '<iframe width="300" src="http://www.youtube.com/embed/$1" frameborder="0" allowfullscreen></iframe>';
    //   return url.replace(pattern2, replacement);
    // }


    if (pattern3.test(url)) {
      var replacement = '<a href="$1" target="_blank"><img width="300" class="embeded" src="$1" /></a><br />';
      return url.replace(pattern3, replacement);
    }

    return null;
  }
}
