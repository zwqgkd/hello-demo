<<<<<<< HEAD
const FlowCharPanel = (function () {
    function FlowCharPanel(_a) {
        var _this = this;
        var lf = _a.lf;
        this.lf = lf;
        this.lf.setPatternItems = function (shapeList) {
            _this.setPatternItems(shapeList);
        };
    }
    FlowCharPanel.prototype.render = function (lf, domContainer) {
        var _this = this;
        this.destroy();


        this.elmenu = document.createElement('div')
        this.elmenu.className = 'btn-list-group lf-dndpanel toolsPanel'

        this.elmenua = document.createElement('div')
        this.elmenua.textContent = "图形"
        this.elmenua.className = 'btn'
        this.elmenu.appendChild(this.elmenua)

        var elsubmenu = document.createElement('div')
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
    FlowCharPanel.prototype.destroy = function () {
        if (this.domContainer && this.elmenu && this.domContainer.contains(this.elmenu)) {
            this.domContainer.removeChild(this.elmenu);
        }
    };
    FlowCharPanel.prototype.setPatternItems = function (shapeList) {
        this.shapeList = shapeList;
        // 支持渲染后重新设置拖拽面板
        if (this.domContainer) {
            this.render(this.lf, this.domContainer);
        }
    };
    FlowCharPanel.prototype.createDndItem = function (shapeItem) {

        var _this = this;
        var el = document.createElement('div');
        el.className = shapeItem.className ? "lf-dnd-item btn" + shapeItem.className : 'lf-dnd-item btn';
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
    FlowCharPanel.pluginName = 'flowCharPanel';
    return FlowCharPanel;
}());

=======
const FlowCharPanel = (function () {
    function FlowCharPanel(_a) {
        var _this = this;
        var lf = _a.lf;
        this.lf = lf;
        this.lf.setPatternItems = function (shapeList) {
            _this.setPatternItems(shapeList);
        };
    }
    FlowCharPanel.prototype.render = function (lf, domContainer) {
        var _this = this;
        this.destroy();


        this.elmenu = document.createElement('div')
        this.elmenu.className = 'btn-list-group lf-dndpanel toolsPanel'

        this.elmenua = document.createElement('div')
        this.elmenua.textContent = "图形"
        this.elmenua.className = 'btn'
        this.elmenu.appendChild(this.elmenua)

        var elsubmenu = document.createElement('div')
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
    FlowCharPanel.prototype.destroy = function () {
        if (this.domContainer && this.elmenu && this.domContainer.contains(this.elmenu)) {
            this.domContainer.removeChild(this.elmenu);
        }
    };
    FlowCharPanel.prototype.setPatternItems = function (shapeList) {
        this.shapeList = shapeList;
        // 支持渲染后重新设置拖拽面板
        if (this.domContainer) {
            this.render(this.lf, this.domContainer);
        }
    };
    FlowCharPanel.prototype.createDndItem = function (shapeItem) {

        var _this = this;
        var el = document.createElement('div');
        el.className = shapeItem.className ? "lf-dnd-item btn" + shapeItem.className : 'lf-dnd-item btn';
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
    FlowCharPanel.pluginName = 'flowCharPanel';
    return FlowCharPanel;
}());

>>>>>>> cc5246f178ea38d88fb571c716d38a74dccb7b51
export {FlowCharPanel};