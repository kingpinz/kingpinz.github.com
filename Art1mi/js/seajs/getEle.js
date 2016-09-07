// JavaScript Document



define(function(){
    function getById(id){
        return document.getElementById(id);
    }
    function getByTagName(oParent,tagName){
        return oParent.getElementsByTagName(tagName);
    }
    return {
        getById:getById,
        getByTagName:getByTagName
    }
});