import { ref } from 'vue'

let tabIndex = 2
const editableTabsValue = ref('2')
const editableTabs = ref([
    {
        title: '流程1',
        name: '1',
        content: 'Tab 1 content',
    },
    {
        title: '流程2',
        name: '2',
        content: 'Tab 2 content',
    },
])

const handleTabsEdit = (targetName, action) => {
    if (action === 'add') {
        const newTabName = `${++tabIndex}`
        editableTabs.value.push({
            title: '流程' + tabIndex,
            name: newTabName,
            content: 'New Tab content',
        })
        editableTabsValue.value = newTabName
    } else if (action === 'remove') {
        const tabs = editableTabs.value
        let activeName = editableTabsValue.value
        if (activeName === targetName) {
            tabs.forEach((tab, index) => {
                if (tab.name === targetName) {
                    const nextTab = tabs[index + 1] || tabs[index - 1]
                    if (nextTab) {
                        activeName = nextTab.name
                    }
                }
            })
        }

        editableTabsValue.value = activeName
        editableTabs.value = tabs.filter((tab) => tab.name !== targetName)
    }
}

export {tabIndex,editableTabsValue,editableTabs,handleTabsEdit}