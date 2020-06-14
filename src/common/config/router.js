
let routes = [

    {
        path: '/',
        name: 'layput',
        redirect: {name:'index'},
        component: 'layout',
        children: [
            {
                // path: "/index",
                // name: 'index',
                component: 'index/index'
            },
            {
                component:'shop/goods/list'
            }
        ]
    },
    {
        // path: '/login',
        // name: 'login',
        component: 'login/index'
    },
    {
        path: "*",
        redirect: {name:'index'}
    }
]

let getRouters = function () {
    createRouter(routes)
    return routes;
}

function createRouter(arr){
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i].component) return;
        let val = getStrVal(arr[i].component);
        arr[i].name = arr[i].name  || val.replace(/\//g,'_');
        arr[i].path = arr[i].path || `/${val}`
        let componentFunc = import(`@/views/${arr[i].component}.vue`);
        arr[i].component = () => componentFunc;
        if (arr[i].children && arr[i].children.length > 0) {
            createRouter(arr[i].children)
        }
    }
}

//去重index
function getStrVal(str){
    let index = str.lastIndexOf('/');
    let val = str.substring(index+1,str.length);
    if(val === 'index'){
        return str.substring(index,-1);
    }
    return str
}

export default getRouters()