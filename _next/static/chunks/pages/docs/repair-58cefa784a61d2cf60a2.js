_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[52],{pd4r:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"default",(function(){return m}));var o=r("Ff2n"),n=r("rePB"),i=(r("q1tI"),r("7ljp")),a=r("aArQ");function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p,s={__resourcePath:"docs/repair.md",__scans:{},title:"How to repair your game files",layout:"index"},b=(p="Alert",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",c({},e))}),u={frontMatter:s},d=a.a;function m(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)(d,c(c(c({},u),r),{},{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",c({},{id:"how-to-repair-your-game-files"}),"How to repair your game files"),Object(i.b)("h2",c({},{id:"requirements"}),"Requirements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",c({parentName:"li"},{href:"https://www.fosshub.com/qBittorrent.html"}),"QBittorrent")),Object(i.b)("li",{parentName:"ul"},"Basic knowledge of the windows folder structure"),Object(i.b)("li",{parentName:"ul"},"The .torrent file of the game you want to repair:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",c({parentName:"li"},{href:"http://dss0.cc/alterwarez/download/pluto_t4_full_game.torrent"}),"For T4")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",c({parentName:"li"},{href:"http://dss0.cc/alterwarez/download/pluto_t6_full_game.torrent"}),"For T6")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",c({parentName:"li"},{href:"#the-repair-process-for-iw5"}),"For IW5 the repair process differs, click here to view the instructions for IW5"))))),Object(i.b)("h2",c({},{id:"the-repair-process-for-t4-and-t6"}),"The repair Process for T4 and T6"),Object(i.b)("p",null,"1","."," Open the .torrent file for the game you wish to repair in QBittorrent, if QBittorrent is the only torrent client you have installed simply double clicking the torrent file should open it right away."),Object(i.b)("p",null,"2","."," You will be prompted with an overview of the files the torrent contains, select your ",Object(i.b)("strong",{parentName:"p"},"game folder")," (depending on which game you want to repair) as the download location."),Object(i.b)("p",null,"3","."," Next comes the most important step: ",Object(i.b)("strong",{parentName:"p"},'Select "don\'t create subfolder" from the "content layout" dropdown menu (in older versions of QBitorrent this will be a checkbox called "create subfolder" or "keep top-level folder" which you have to untick)'),"."),Object(i.b)("p",null,Object(i.b)("img",c({parentName:"p"},{src:"https://i.imgur.com/cad1CXU.png",alt:"qbittorrentoverview"}))),Object(i.b)("p",null,"4","."," Hit OK to start the verification/download process, QBittorrent will now check the files in your game folder against the ones in the torrent and download missing or mismatching ones."),Object(i.b)("p",null,"5",".",' As soon as the download reached 100% and the status "seeding" it is complete and can be removed from QBittorrent (right click -> delete).'),Object(i.b)("p",null,"Congratulations, your game files should now be repaired."),Object(i.b)("h2",c({},{id:"the-repair-process-for-iw5"}),"The repair Process for IW5"),Object(i.b)(b,{variant:"warning",mdxType:"Alert"},Object(i.b)("p",null,"The officially supported way of installing IW5 is to download the free MW3 Dedicated Server via Steam. The repair guide will cover repairing your game files via Steam, this also works if you own the game on Steam.\nAny 3rd party repacks of MW3 are not supported by us.")),Object(i.b)("p",null,"1","."," Open Steam and navigate to your Steam Library."),Object(i.b)("p",null,"2","."," Locate the MW3 Dedicated Server or MW3 Multiplayer (if you own it) in your Steam library."),Object(i.b)("p",null,"3","."," Right click the entry in your Steam library and click ",Object(i.b)("inlineCode",{parentName:"p"},"Properties"),"."),Object(i.b)("p",null,Object(i.b)("img",c({parentName:"p"},{src:"https://i.imgur.com/7PASWFp.png",alt:"steamlibrary"}))),Object(i.b)("p",null,"4","."," Click ",Object(i.b)("inlineCode",{parentName:"p"},"Local Files")," and hit ",Object(i.b)("inlineCode",{parentName:"p"},"Verify integrity of tool files...")," (this will be called ",Object(i.b)("inlineCode",{parentName:"p"},"Verify integrity of game files...")," if you own the game on Steam)."),Object(i.b)("p",null,Object(i.b)("img",c({parentName:"p"},{src:"https://i.imgur.com/qyfKXnz.png",alt:"steamproperties"}))),Object(i.b)("p",null,"5","."," Steam will now check your local files and download any missing or outdated ones, as soon as it's done your game files should be repaired."),Object(i.b)(b,{variant:"warning",mdxType:"Alert"},Object(i.b)("p",null,"If you don't own the game on Steam and use the MW3 Dedicated Server files to play make sure the language (below ",Object(i.b)("inlineCode",{parentName:"p"},"local files")," in the properties dialogue) is set to ",Object(i.b)("inlineCode",{parentName:"p"},"English"),".\nSteam provides incomplete files if any language other than ",Object(i.b)("inlineCode",{parentName:"p"},"English")," is set.")))}m.isMDXComponent=!0},tm6d:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/repair",function(){return r("pd4r")}])}},[["tm6d",0,1,2,3,4]]]);