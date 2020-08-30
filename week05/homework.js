/**
 *
 * @param {String} selector
 * @param {HTMLElement} element
 */
function match(selector, element) {
  selector = selector || "";
  let el = element;
  const sList = selector.split(/\s*[\s>~+]+\s*/);

  let selectorIndex = sList.length - 1;
  while (el && selectorIndex > -1) {
    if (matchSelector(sList[selectorIndex], el)) {
      el = el.parentElement;
      selectorIndex--;
    } else {
      el = el.parentElement;
    }
  }

  // selector 全部成功匹配，返回 true
  return selectorIndex === -1;
}

/**
 * 是否能匹配简单选择器
 * @param {string} simpleSelector 简单选择器
 * @param {HTMLElement} element 元素
 */
function matchSelector(simpleSelector, element) {
  if (!element) {
    return false;
  }
  const selectorGroups = simpleSelector.match(/([#\.]?[a-zA-Z0-9\-_]+)/g);
  if (!selectorGroups) {
    return false;
  }

  return selectorGroups.every((selectorItem) => {
    if (selectorItem.charAt(0) === "#") {
      // id selector
      const id = selectorItem.slice(1);
      return element.id === id;
    } else if (selectorItem.charAt(0) === ".") {
      // class selector
      const classList = Array.prototype.slice.call(element.classList);
      const className = selectorItem.slice(1);
      return classList.indexOf(className) >= 0;
    } else {
      // tag selector
      return selectorItem.toLowerCase() === element.tagName.toLowerCase();
    }
  });
}

describe("match()", function () {
  const cases = [
    {
      selector: "#main div",
      element: document.getElementById("id"),
      except: true,
    },
    {
      selector: "div #id.cls",
      element: document.getElementById("id"),
      except: true,
    },
    {
      selector: "div #id.zzz",
      element: document.getElementById("id"),
      except: false,
    },
  ];

  cases.forEach((item) => {
    it("test selector: " + item.selector, function () {
      const a = match(item.selector, item.element);
      chai.assert.equal(a, item.except);
    });
  });
});
