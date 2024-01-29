function start (){
    if(参数("target")!=false){
        gotoitem(参数("target"))
    }
    document.getElementById("blogifr").height=window.innerHeight - 108;
}
function 参数(variable){
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if(pair[0] == variable){return pair[1];}
    }
    return(false);
}
function tab_dis (tab){
    var tabs=document.getElementsByClassName("tab");
    for (i=0;i<tabs.length;i++){
        tabs[i].style.display="none";
    }
    document.getElementById(tab).style.display="block";
}
function tologin (st){
    if(st){
        if(mdui.confirm('退出登录?')){
            window.location.replace('logout.php');
        }
    }
    else {
        
        dia.open('dia-login');
    }
    //window.location.replace("./login/");
}
function menu (menu,btn){
    var me = new mdui.Menu('#'+btn, '#'+menu);
    me.open();
}
function fk (){
    var lxfs = document.getElementById('fk_lxfs');
    var nr = document.getElementById('fk_nr');
    if(lxfs.value=="debug"){
        if(nr.value=="runjs"){
            dia.open('runjs');
        }
        else mdui.alert('感谢您的反馈');
    }
    else mdui.alert('感谢您的反馈');
}
function runjs (){
    var dm = document.getElementById('jsdm').value;
    //document.getElementById('debugjs').innerHTML=dm;
    setTimeout(dm,0);
}
function loadurl(url){
    window.location.replace(url);
}
function gotoitem(item){
    switch (item){
        case "browatch":
            loadurl("https://www.123pan.com/s/zaQKVv-EulK3.html");
            break;
        case "toolbox_tc":
            loadurl("https://www.123pan.com/s/zaQKVv-Bi7K3.html");
            break;
        case "godbyte":
            loadurl("godbyte");
            break;
        case "ph":
            loadurl("ph");
            break;
        default:
            alert("404\n未找到 "+item);
    }
}

var 元素 = {
    修改:function(id,nr){
        document.getElementById(id).innerHTML=nr;
    }
}
var doc={
    getEById:function(id){
        return(document.getElementById(id));
    }
}
var dra = {
    open:function (dra){
        var inst = new mdui.Drawer('#'+dra);
        inst.open();
    },
    close:function (dra){
        var inst = new mdui.Drawer('#'+dra);
        inst.close();
    },
    cha:function (dra){
        var inst = new mdui.Drawer('#'+dra);
        inst.toggle();
    }
}
var dia = {
    open:function (dra){
        var inst = new mdui.Dialog('#'+dra);
        inst.open();
    },
    close:function (dra){
        var inst = new mdui.Dialog('#'+dra);
        inst.close();
    }
}

start();