AFRAME.registerComponent("create-meteors",{
    init:function(){
        
        setInterval(this.createmeteors,5000)
    },
    createmeteors:function(){
        px=[-45, 44, 43,-01, 2,-2,-7,11,-30,33]
        pz=[-50,-66,-88,-70,-90,-100,-95,-75,-55,-80]
        var rand=Math.floor(Math.random()*px.length)
            var meteor=document.createElement("a-entity")
            meteor.setAttribute("id","meteor"+rand)
            meteor.setAttribute("position",{
                x:px[rand],y:15,z:pz[rand]
            })
            meteor.setAttribute("gltf-model","./meteor/scene.gltf")
            meteor.setAttribute("scale",{x:0.015,y:0.015,z:0.015})
            meteor.setAttribute("animation",{
                property:"position",
                to:`0 0 10`,
                dur:10000,
                easing:"linear",
                loop:true,
            })
            meteor.setAttribute("static-body",{})
            var scene=document.querySelector("#scene")
            scene.appendChild(meteor)
            meteor.addEventListener("collide",function(e){
                if(e.detail.body.el.id==="weapon"){
                    var txt=document.querySelector("#gameOver")
                    txt.setAttribute("visible",true)
                   // var meteorEl=document.querySelectorAll("")
                }
            })
        

    }
})