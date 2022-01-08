function myFunction123() {
  var foldername = 'photos';
  var folderlisting = 'listing of folder ' + foldername;
  var toAdd=[];

  var folders = DriveApp.getFoldersByName(foldername)
  var folder = folders.next();
  var contents = folder.getFiles();
  var contents = folder.getFiles();
  
  var ss = SpreadsheetApp.create(folderlisting);
  var sheet = ss.getActiveSheet();
  sheet.appendRow(['name','link']);
  
  var file;
  var name;
  
  
  var thisData = []
  
  while(contents.hasNext()){
    
    file = contents.next();
   
    name = file.getName();
    
    link = file.getId();
    
    
    thisData.push(name,file);
   
    
    toAdd.push(thisData);
  }
  
  // sheet.appendRow([name, link]);
  console.log(toAdd.length)
  console.log(toAdd[0].length)
  sheet.getRange(1,1,toAdd.length , toAdd[0].length ).setValues(toAdd);
};
