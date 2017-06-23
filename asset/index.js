define(['zepto','mustache'],function(undef,Mustache){

    var timeKey=function(date){
        date =date ||new Date();
        return (date.getFullYear()*10000 +(date.getMonth()+1)*100 + date.getDate()).toString();
    };
    var $list,tpl;
        getData=function(pid,fn){
            $.getJSON('/admin/page/getdetailpv?pid='+pid+'&TimezoneOffset=-480',function(r){
                fn(r && r.data,pid)
            })
        },
        pageConf=[
            {
                pid:'58f97db80304656d7a905d0d',
                title:'首页'
            }, {
                pid:'5922b424940282a75fa82ac2',
                title:'制作页'
            }, {
                pid:'58fb40ca0304656d7a905e16',
                title:'购物车'
            }
        ],
       // pids='58f97db80304656d7a905d0d,5922b424940282a75fa82ac2'.split(','),
        pageData={
        },
        render=function(){
            for(var i= 0,n;n=pageConf[i++];){
                var data=pageData[n.pid]||{};
                n.data=[];
                for(var k in data){
                    n.data.push({
                        uv:data[k].uv,
                        pv:data[k].pv,
                        label:k
                    })
                }
                n.data.sort(function(a,b){return a.label> b.label?-1:1});
            }
            $list.html(Mustache.render(tpl,pageConf))
            //console.log(pageData)
        },
        callback=function(data,pid){

            pageData[pid]=data;
            callback.count=callback.count||0;
            callback.count++;

            if(callback.count==pids.length){

                render();
            }
        };

  return {
    init:function($mod){
        //
        $list=$('.J_list',$mod);
        tpl=$('.J_tpl',$mod).html();
        if($mod.attr('data-env')=='local'){
            pageData={
                '58f97db80304656d7a905d0d':{"20170622":{"pv":267,"uv":232},"20170623":{"pv":11,"uv":9}},
                '5922b424940282a75fa82ac2':{"20170622":{"pv":23,"uv":12},"20170623":{"pv":1,"uv":1}},
                '58fb40ca0304656d7a905e16':{"20170622":{"pv":3,"uv":2},"20170623":{"pv":0,"uv":0}}
            }
        }

        var pids=[];
        for(var i= 0,n;n=pageConf[i++];){
            pids.push(n.pid);
        }
        for(var i= 0,pid;pid=pids[i++];){
            getData(pid,callback)
        }
        render();

    }
  }
})
