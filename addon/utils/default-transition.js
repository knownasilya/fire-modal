import { target } from 'liquid-tether';

const options = {
  duration: 700,
  easing: 'easeInOutQuint'
};

export default function defaultTransition(context) {
  if (!context || typeof context.transition !== 'function') {
    throw new Error('[bootstrap-modal] Invalid transitions context supplied');
  }

  return context.transition(
    target('bootstrap-modal'),
    // hack to get reverse working..
    context.toValue(current => {
      return current.isVisible;
    }),
    context.use('explode', {
      pick: '.modal-dialog',
      use: ['to-down', options]
    }, {
      pick: '.modal-backdrop',
      use: 'crossFade'
    }),
    context.reverse('explode', {
      pick: '.modal-dialog',
      use: ['to-up', options]
    }, {
      pick: '.modal-backdrop',
      use: 'crossFade'
    })
  );
}
