/*
 * Copyright (c) 2015 Advanced Community Information Systems (ACIS) Group, Chair
 * of Computer Science 5 (Databases & Information Systems), RWTH Aachen
 * University, Germany All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 * 
 * Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 * 
 * Neither the name of the ACIS Group nor the names of its contributors may be
 * used to endorse or promote products derived from this software without
 * specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */

var client;

var init = function() {
  
  var iwcCallback = function(intent) {
    // define your reactions on incoming iwc events here 
    console.log(intent);
    if (intent.action == "updatePElement") {
       someCreateFunction(intent.data);
    }
  };

  client = new Las2peerWidgetLibrary("http://localhost:80/myResource", iwcCallback);
Y({
  db: {
    name: 'memory'
  },
  connector: {
    name: 'websockets-client',
    room: 'cae-room'
  },
  sourceDir: "http://y-js.org/bower_components",
  share: {
    collabo2:'Text',
    collabo1:'Text' 
    intents: 'Map'
  }
}).then(function (y) {
  window.yTextarea = y
  y.share.collabo2.bind(document.getElementById('collabo2'))
  y.share.collabo1.bind(document.getElementById('collabo1'))
 
}).catch(function(y) {
  console.log("YJS failed to load");
});


  $('#someButton').on('click', function() {
    //start parameter initiation
    var someParam = null;

    //end parameter initiation
    myFunction(someParam);
  })
  $('#clickElement').on('click', function() {
    //start parameter initiation

    //end parameter initiation
    InitiateICW();
  })


}

var initClient = function(y) {
  this.client = new Las2peerWidgetLibrary("", iwcCallback, "127.0.0.1:8073", y);
  console.log("Client initialized");
};

// myFunction
var myFunction = function(someParam){

//start variable declaration

//end variable declaration

   var myCallContent = null;
  client.sendRequest("GET", somePath/, myCallContent, "text/plain", {}, true,
  function(data, type) {
    console.log(data);
    //Also update the html element?
    //$("#someElementDiv").html("Updated Element");
  },
  function(error) {
    console.log(error);
    //Also update the html element?
    //$("#someElementDiv").html("Updated Element");
  });

  $("#someElementDiv").html("Updated Element");
  //Additional own javascript

}

// InitiateICW
var InitiateICW = function(){

//start variable declaration

//end variable declaration


  var modifiedpelement = "initialized";
  client.sendIntent("updatePElement",modifiedpelement,true);

  //Additional own javascript

}

// someCreateFunction
var someCreateFunction = function(modifiedPElement){

//start variable declaration
   var somePariraro = null;

//end variable declaration

   $( ".container" ).append(" 
<p id='someId2' > </p>
 ");

  //Additional own javascript
 return somePariraro;
}


$(document).ready(function() {
  init();
});
