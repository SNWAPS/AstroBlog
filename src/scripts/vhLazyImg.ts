// 图片懒加载
import LazyLoad from "vanilla-lazyload";

// 初始化图片懒加载
let lazyLoadStatus: any = null;
export default () => {
  document.querySelectorAll(".main-inner>.main-inner-content img:not(.view-image-container)").forEach((i: any) => {
    // 是否包含data-vh-lz-src
    if (!i.hasAttribute("data-vh-lz-src")) {
      const realSrc = i.getAttribute("src");
      i.setAttribute("data-vh-lz-src", realSrc);
      i.setAttribute("src", '/assets/images/lazy-loading.webp');
      // 加载失败时回退到占位图
      i.onerror = function () {
        if (i.src !== '/assets/images/lazy-loading.webp') {
          i.src = '/assets/images/lazy-loading.webp';
        }
      };
      // 可选：加载完成后移除 onerror，防止后续误触
      i.onload = function () {
        if (i.src !== '/assets/images/lazy-loading.webp') {
          i.onerror = null;
        }
      };
    }
  });
  if (lazyLoadStatus) return lazyLoadStatus.update();
  lazyLoadStatus = new LazyLoad({
    elements_selector: "img:not(.view-image-container)",
    threshold: 0,
    data_src: "vh-lz-src",
    callback_error: (elt: HTMLElement) => {
      const img = elt as HTMLImageElement;
      img.src = '/assets/images/lazy-loading.webp';
      img.removeAttribute('data-vh-lz-src'); // 防止懒加载库重复尝试
    }
  });
}