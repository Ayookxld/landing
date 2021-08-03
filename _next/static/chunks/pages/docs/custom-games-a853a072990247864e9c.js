_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[27],{FAeB:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n("Ff2n"),r=n("rePB"),o=(n("q1tI"),n("7ljp")),i=n("aArQ");function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c,s={__resourcePath:"docs/custom-games.md",__scans:{},title:"Custom Games / Playing with friends",layout:"index"},p=(c="Alert",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",b({},e))}),u={frontMatter:s},m=i.a;function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)(m,b(b(b({},u),n),{},{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",b({},{id:"custom-games--playing-with-friends"}),"Custom Games / Playing with friends"),Object(o.b)("p",null,"This guide will teach you how to play with friends over the internet in a custom games match."),Object(o.b)("h2",b({},{id:"getting-started"}),"Getting Started"),Object(o.b)("p",null,"Both you and your friend need to follow each other on the Plutonium Forums:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Go to ",Object(o.b)("a",b({parentName:"li"},{href:"https://forum.plutonium.pw/users"}),"https://forum.plutonium.pw/users")," and search for your friend."),Object(o.b)("li",{parentName:"ul"},'Go to their profile and hit the green "plus" (+) button to follow them.',Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"If there is only a heart, that means that you are already following them.")))),Object(o.b)("h2",b({},{id:"t4--t6"}),"T4 / T6"),Object(o.b)("p",null,"Once you and your friend are following each other, the person who wants to host the private match needs to do the following:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Open the game and open the serverlist (F10 or Home key)"),Object(o.b)("li",{parentName:"ul"},"Go to the network tab and check if UPnP is enabled")),Object(o.b)("hr",null),Object(o.b)("h3",b({},{id:"if-upnp-is-enabled"}),Object(o.b)("strong",{parentName:"h3"},"If UPnP is Enabled")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Start a Private Match"),Object(o.b)("li",{parentName:"ul"},"If the match requires 2 players to start you can force it to start anyways with the command ",Object(o.b)("inlineCode",{parentName:"li"},"xpartygo")),Object(o.b)("li",{parentName:"ul"},"Your friend should now be able to join by double-clicking your name in the Friends List (between the Server Browser and Network tab)")),Object(o.b)("hr",null),Object(o.b)("h3",b({},{id:"if-upnp-is-disabled"}),Object(o.b)("strong",{parentName:"h3"},"If UPnP is Disabled")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Go to Windows Settings -> Network & Internet, then hit Properties under your network name.")),Object(o.b)("p",null,Object(o.b)("img",b({parentName:"p"},{src:"https://i.imgur.com/PnaSif4.png",alt:"img"}))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Set the Network Profile to Private")),Object(o.b)("p",null,Object(o.b)("img",b({parentName:"p"},{src:"https://i.imgur.com/hC6G8QN.png",alt:"img"}))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Restart the game")),Object(o.b)("hr",null),Object(o.b)("h3",b({},{id:"if-upnp-is-still-disabled-or-you-cant-connect-despite-it-being-enabled"}),Object(o.b)("strong",{parentName:"h3"},"If UPnP is still disabled or you can't connect despite it being enabled")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Forward the following ports:",Object(o.b)("br",{parentName:"li"}),Object(o.b)("inlineCode",{parentName:"li"},"28960-28961")," (UDP) ","[T4]",Object(o.b)("br",{parentName:"li"}),Object(o.b)("inlineCode",{parentName:"li"},"4976-4977")," (UDP) ","[T6]","  ",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"(You may need to google your router's guide on port forwarding, since every router is different, this ",Object(o.b)("a",b({parentName:"li"},{href:"https://www.lifewire.com/how-to-port-forward-4163829"}),"Lifewire article")," might be helpful."))),Object(o.b)("li",{parentName:"ul"},"Whitelist the following ports inside Windows Firewall:",Object(o.b)("br",{parentName:"li"}),Object(o.b)("inlineCode",{parentName:"li"},"28960-28961")," (UDP) ","[T4]",Object(o.b)("br",{parentName:"li"}),Object(o.b)("inlineCode",{parentName:"li"},"4976-4977")," (UDP) ","[T6]","  ",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"This ",Object(o.b)("a",b({parentName:"li"},{href:"https://www.tomshardware.com/news/how-to-open-firewall-ports-in-windows-10,36451.html"}),"Tom's Hardware")," article might be helpful."))),Object(o.b)("li",{parentName:"ul"},"Once those steps are done, open your game and start a private match. ",Object(o.b)("strong",{parentName:"li"},"(Parties will not work)")),Object(o.b)("li",{parentName:"ul"},"If the match requires 2 players to start you can force it to start anyways with the command ",Object(o.b)("inlineCode",{parentName:"li"},"xpartygo")),Object(o.b)("li",{parentName:"ul"},"Your friend should now be able to join by double-clicking your name in the Friends List (between the Server Browser and Network tab)")),Object(o.b)(p,{variant:"tip",mdxType:"Alert"},Object(o.b)("p",null,"If you are starting a zombies game, you can use the console command to start the game once your match gets a minimum amount of players. (So you can all start on round 1 together)"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"sp_minplayers")," ","[T4]",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("inlineCode",{parentName:"p"},"zombies_minplayers")," ","[T6]")),Object(o.b)("h2",b({},{id:"iw5"}),"IW5"),Object(o.b)("p",null,"In IW5, there's no easy way of telling if UPnP is enabled, outside of just testing it."),Object(o.b)("h3",b({},{id:"if-upnp-is-enabled-1"}),Object(o.b)("strong",{parentName:"h3"},"If UPnP is enabled")),Object(o.b)("p",null,"Simply start a private match and have your friend join you from Friends > Double clicking your name."),Object(o.b)("h3",b({},{id:"if-upnp-is-disabled--is-not-working"}),Object(o.b)("strong",{parentName:"h3"},"If UPnP is disabled / is not working")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Forward the port ",Object(o.b)("inlineCode",{parentName:"li"},"27016")," (UDP) - (You may need to google your router's guide on port forwarding, since every router is different, this ",Object(o.b)("a",b({parentName:"li"},{href:"https://www.lifewire.com/how-to-port-forward-4163829"}),"Lifewire article")," might be helpful."),Object(o.b)("li",{parentName:"ul"},"Whitelist the port ",Object(o.b)("inlineCode",{parentName:"li"},"27016")," (UDP) in Windows Firewall, this ",Object(o.b)("a",b({parentName:"li"},{href:"https://www.tomshardware.com/news/how-to-open-firewall-ports-in-windows-10,36451.html"}),"Tom's Hardware")," article might be helpful."),Object(o.b)("li",{parentName:"ul"},"Once those steps are done, open your game and start a private match. ",Object(o.b)("strong",{parentName:"li"},"(Parties will not work)")),Object(o.b)("li",{parentName:"ul"},"If the match requires 2 players to start you can force it to start anyways with the command ",Object(o.b)("inlineCode",{parentName:"li"},"xpartygo")),Object(o.b)("li",{parentName:"ul"},"Your friend should now be able to join by double-clicking your name in the Friends List")),Object(o.b)("h2",b({},{id:"additional-notes"}),"Additional Notes"),Object(o.b)("h3",b({},{id:"lan-play"}),"LAN Play"),Object(o.b)("p",null,"If you and some / all of your friends are on the same LAN they connect through the internal IP, if all players are on the same LAN portforwarding is not necessary."),Object(o.b)("p",null,"If you want to find your internal IP open a Command Prompt and type ",Object(o.b)("inlineCode",{parentName:"p"},"ipconfig"),"."),Object(o.b)("p",null,Object(o.b)("img",b({parentName:"p"},{src:"https://i.imgur.com/gUXeTOE.png",alt:"img"}))),Object(o.b)("p",null,"Your local IP will be under ",Object(o.b)("inlineCode",{parentName:"p"},"IPv4 Address"),"."),Object(o.b)("p",null,"From there, every client on your LAN will simply be able to connect by ",Object(o.b)("a",b({parentName:"p"},{href:"opening-console"}),"opening the console")," and executing"),Object(o.b)("div",b({},{className:"remark-highlight"}),Object(o.b)("pre",b({parentName:"div"},{className:"language-cs"}),Object(o.b)("code",b({parentName:"pre"},{className:"language-cs"}),"connect HostsIPv4AddressHere\n"))),Object(o.b)("h3",b({},{id:"connecting-via-an-ip-address"}),"Connecting via an IP address"),Object(o.b)("p",null,"If the friends list doesn't work for you, you can try connecting via an IP Address."),Object(o.b)("p",null,"Have the host get their IP (which they can do via the Plutonium Overlay's Network tab, or via ",Object(o.b)("a",b({parentName:"p"},{href:"https://www.whatismyip.com/"}),"WhatIsMyIP"),")"),Object(o.b)("p",null,"Then, you will simply be able to connect by ",Object(o.b)("a",b({parentName:"p"},{href:"opening-console"}),"opening the console")," and running the command"),Object(o.b)("div",b({},{className:"remark-highlight"}),Object(o.b)("pre",b({parentName:"div"},{className:"language-cs"}),Object(o.b)("code",b({parentName:"pre"},{className:"language-cs"}),"connect HostsIPAddressHere\n"))))}d.isMDXComponent=!0},tXS9:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/custom-games",function(){return n("FAeB")}])}},[["tXS9",0,1,2,3,4]]]);