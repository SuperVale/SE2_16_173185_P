/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function toggle(id)
{
    if(document.getElementById(id).style.display === 'none')
    {
        document.getElementById(id).style.display = 'block';
    }
    else if(document.getElementById(id).style.display === 'block')
    {
        document.getElementById(id).style.display = 'none';
    }
}

function pre()
{
    xhr = new XMLHttpRequest();
    var url = "/";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onreadystatechange = function ()
    {
        if (xhr.readyState == 4 && xhr.status == 200)
        {
            var json = JSON.parse(xhr.responseText);
            date=json.date;
            window.location = json.url;
        }
    };
    var data = JSON.stringify({"email": "hey@mail.com", "password": "101010"});
    xhr.send(data);
}

function next_1()
{
    xhr = new XMLHttpRequest();
    var url = "/1/";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onreadystatechange = function ()
    {
        if (xhr.readyState == 4 && xhr.status == 200)
        {
            var json = JSON.parse(xhr.responseText);
            window.location = json.url;
        }
    };
    var data = JSON.stringify({"date": document.getElementById("datepick").value});
    xhr.send(data);
}

function undo()
{
    window.location = "/";
}

function prev_3()
{
    window.location = "/2";
}

var count = 0;
var ord = [];

function add(food)
{
    ord.push(food);
    update();
}

function update()
{
    var s = "";
    
    if(ord.length<=0)
    {document.getElementById("vass").style.display='block';}
    else
    {document.getElementById("vass").style.display='none';}
    
    for(var i=0; i<ord.length; i++)
    {
        s=s+"<li>"+ord[i]+'<span onclick="remove(\''+ord[i]+'\')" class="w3-closebtn w3-margin-right w3-medium">&times;</span></li>';
        
    }
    
    document.getElementById("list").innerHTML=s;
}

function remove(food)
{
    var done=false;
    for(var i=0; i<ord.length && !done; i++)
    {
        if(ord[i]==food)
        {ord.splice(i, 1); done=true;}
    }
    update();
}

function next_2()
{
    xhr = new XMLHttpRequest();
    var url = "/2/";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onreadystatechange = function ()
    {
        if (xhr.readyState == 4 && xhr.status == 200)
        {
            var json = JSON.parse(xhr.responseText);
            window.location = json.url;
        }
    };
    var data = JSON.stringify({"ord": ord.toString()});
    xhr.send(data);
}

var opt1 = false;
var opt2 = false;

function next_3()
{
    xhr = new XMLHttpRequest();
    var url = "/3/";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onreadystatechange = function ()
    {
        if (xhr.readyState == 4 && xhr.status == 200)
        {
            var json = JSON.parse(xhr.responseText);
            window.location = json.url;
        }
    };
    opt1=document.getElementById("opt1").checked;
    opt2=document.getElementById("opt2").checked;
    var data = JSON.stringify({"opt1": opt1, "opt2": opt2});
    xhr.send(data);
}