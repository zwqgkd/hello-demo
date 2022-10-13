const SuanziPanel = (function () {
    function SuanziPanel(_a) {
        var _this = this;
        var lf = _a.lf;
        this.lf = lf;
        this.lf.setPatternItems = function (shapeList) {
            _this.setPatternItems(shapeList);
        };
    }
    SuanziPanel.prototype.render = function (lf, domContainer) {
        var _this = this;
        this.destroy();


        this.elmenu = document.createElement('span')
        this.elmenu.className = 'btn-list-group'

        this.elmenua = document.createElement('a')
        this.elmenua.textContent = "算子"
        this.elmenua.className = 'btn'
        this.elmenu.appendChild(this.elmenua)

        var elsubmenu = document.createElement('span')
        elsubmenu.className = "btn-list-area"
        this.elmenu.appendChild(elsubmenu)



        if (!this.shapeList || this.shapeList.length === 0) {
            // 首次render后失败后，后续调用setPatternItems支持渲染
            this.domContainer = domContainer;
            return;
        }

        this.shapeList.forEach(function (shapeItem) {
            elsubmenu.appendChild(_this.createDndItem(shapeItem));
        });


        this.elmenu.appendChild(elsubmenu)

        domContainer.appendChild(this.elmenu);
        this.domContainer = domContainer;
    };
    SuanziPanel.prototype.destroy = function () {
        if (this.domContainer && this.elmenu && this.domContainer.contains(this.elmenu)) {
            this.domContainer.removeChild(this.elmenu);
        }
    };
    SuanziPanel.prototype.setPatternItems = function (shapeList) {
        this.shapeList = shapeList;
        // 支持渲染后重新设置拖拽面板
        if (this.domContainer) {
            this.render(this.lf, this.domContainer);
        }
    };
    SuanziPanel.prototype.createDndItem = function (shapeItem) {

        var _this = this;
        var el = document.createElement('a');
        el.className = 'btn'
        // el.className = shapeItem.className ? "lf-dnd-item " + shapeItem.className : 'lf-dnd-item';
        // var shape = document.createElement('div');
        // shape.className = 'lf-dnd-shape';
        // if (shapeItem.icon) {
        //     shape.style.backgroundImage = "url(" + shapeItem.icon + ")";
        // }
        // el.appendChild(shape);
        // if (shapeItem.label) {
        //     var text = document.createElement('div');
        //     text.innerText = shapeItem.label;
        //     text.className = 'lf-dnd-text';
        //     el.appendChild(text);
        // }

        if (shapeItem.label) {
            el.textContent = shapeItem.label;
        }
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
    SuanziPanel.pluginName = 'suanziPanel';
    return SuanziPanel;
}());

export {SuanziPanel};