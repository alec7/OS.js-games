const IFrameApplication = OSjs.require('helpers/iframe-application');

class ApplicationWolfenstein extends IFrameApplication {
  constructor(args, metadata) {
    super('ApplicationWolfenstein', args, metadata, {
      src: 'data/index.html',
      focus: function(frame, win) {
        win.postMessage('resume', window.location.href);
      },
      blur: function(frame, win) {
        win.postMessage('pause', window.location.href);
      },
      title: metadata.name,
      icon: metadata.icon,
      width: 640,
      height: 400,
      allow_resize: false,
      allow_restore: false,
      allow_maximize: false
    });
  }
}

OSjs.Applications.ApplicationWolfenstein = ApplicationWolfenstein;
