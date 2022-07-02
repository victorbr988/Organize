// https://stackoverflow.com/questions/57008341/jest-testing-react-component-with-react-intersection-observer

global.IntersectionObserver = class IntersectionObserver {
  constructor() {}

  observe() {
    return null;
  }

  disconnect() {
    return null;
  };

  unobserve() {
    return null;
  }
};