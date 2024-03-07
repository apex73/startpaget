var c=document.getElementById("matrixCanvas"),ctx=c.getContext("2d");c.height=window.innerHeight;c.width=window.innerWidth;var matrix="ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%";matrix=matrix.split("");var font_size=10,columns=c.width/font_size,drops=[];for(var x=0;x<columns;x++)drops[x]=1;function draw(){ctx.fillStyle="rgba(0, 0, 0, 0.04)";ctx.fillRect(0,0,c.width,c.height);ctx.fillStyle="#0F0";ctx.font=font_size+"px arial";for(var i=0;i<drops.length;i++){var text=matrix[Math.floor(Math.random()*matrix.length)];ctx.fillText(text,i*font_size,drops[i]*font_size);if(drops[i]*font_size>c.height&&Math.random()>0.975)drops[i]=0;drops[i]++}}setInterval(draw,33);function search(e){"Enter"===e.key&&(e.preventDefault(),window.location.href="https://duckduckgo.com/?q="+document.getElementById('search-bar').value)}function updateTimeCalendar(){var e=new Date,t=e.getHours()+":"+e.getMinutes()+":"+e.getSeconds(),a=e.getDate()+"/"+(e.getMonth()+1)+"/"+e.getFullYear();document.getElementById("time-calendar").innerHTML="Time: "+t+"<br>"+"Date: "+a;setTimeout(updateTimeCalendar,1e3)}updateTimeCalendar();fetch('https://api.open-meteo.com/v1/forecast?latitude=47.1860&longitude=18.4221&current=temperature_2m').then(response=>response.json()).then(data=>{document.getElementById('weather').innerHTML="Weather: "+data.forecast.daily.data[0].temperature_2m_max+"°C"});
