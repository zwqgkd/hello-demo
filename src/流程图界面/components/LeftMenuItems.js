// 节点样式创建 以及拖动效果绑定
const LeftMenus = (function () {
    function LeftMenus(_a) {
        var _this = this;
        var lf = _a.lf;
        this.lf = lf;
        this.lf.setPatternItems = function (shapeList) {
            _this.setPatternItems(shapeList);
        };
    }
    LeftMenus.prototype.render = function (lf, domContainer) {
        var _this = this;
        this.destroy();

        if (!this.shapeList || this.shapeList.length === 0) {
            // 首次render后失败后，后续调用setPatternItems支持渲染
            this.domContainer = domContainer;
            return;
        }
        //遍历列表，依次创建每个节点
        this.shapeList.forEach(function (shapeItem) {
            document.getElementById(shapeItem.id).appendChild(_this.createDndItem(shapeItem));
        });


        this.domContainer = domContainer;
    };
    LeftMenus.prototype.destroy = function () {
        if (this.domContainer && this.elmenu && this.domContainer.contains(this.elmenu)) {
            this.domContainer.removeChild(this.elmenu);
        }
    };
    LeftMenus.prototype.setPatternItems = function (shapeList) {
        this.shapeList = shapeList;
        // 支持渲染后重新设置拖拽面板
        if (this.domContainer) {
            this.render(this.lf, this.domContainer);
        }
    };

    //创建图形节点标签
    LeftMenus.prototype.createDndItem = function (shapeItem) {

        var _this = this;
        var el = document.createElement('div');
        el.className = shapeItem.className ? "lf-dnd-item" + shapeItem.className : 'lf-dnd-item';
        var shape = document.createElement('div');
        shape.className = 'lf-dnd-shape';
        if (shapeItem.icon) {
            shape.style.backgroundImage = "url(" + shapeItem.icon + ")";
        }
        el.appendChild(shape);
        if (shapeItem.label) {
            var text = document.createElement('div');
            text.innerText = shapeItem.label;
            text.className = 'lf-dnd-text';
            el.appendChild(text);
        }

        //每个节点拖动绑定
        el.onmousedown = function () {
            if (shapeItem.type) {
                _this.lf.dnd.startDrag({
                    type: shapeItem.type,
                    properties: shapeItem.properties,
                    text: shapeItem.text,
                });
            }
            if (shapeItem.callback) {
                shapeItem.callback(_this.lf, _this.domContainer);
            }
        };
        return el;
    };
    LeftMenus.pluginName = 'leftMenus';
    return LeftMenus;
}());


//导出变量
export {LeftMenus};