
 
  //adding class-distribution and removing all other classes

 
   function carddistribution(){

  
    {
      var bd=document.getElementById('mycards').children
      for(let i=0;i<10;i++)
      {
        bd[i].classList.add('distribution')
        bd[i].classList.remove('my5cards')
       
        
      }
      
    
      for(let i=0;i<5;i++)
        {
          let j= "my"+(i+1)+"card"
          let k= "my"+(i+1)+"cardc"
          bd[i].removeAttribute("id",j)
          bd[i+5].removeAttribute("id",k)
          
        }
       
    }
    {
      
        var db=document.getElementById('comcards').children
        for(let i=0;i<10;i++)
        {
          db[i].classList.add('distributionO')
          db[i].classList.remove('com5cards')
         
          
        }
        
      
        for(let i=0;i<5;i++)
          {
            let j= "com"+(i+1)+"card"
            let k= "com"+(i+1)+"cardc"
            db[i].removeAttribute("id",j)
            db[i+5].removeAttribute("id",k)
           
          }
      
    }
    {
      document.querySelector('.blur').remove()
     let z=document.querySelector('#showncards')
      z.style.zIndex= "auto"
    }
   
    setTimeout(
      ()=>
      {
        {
        var bda=document.getElementsByClassName('distribution')
        for(let i=0;i<10;i++)
        {
          bda[i].classList.add('my5cards') 
        }
        
      
        for(let i=0;i<5;i++)
          {
            let j= "my"+(i+1)+"card"
            let k= "my"+(i+1)+"cardc"
            bda[i].setAttribute("id",j)
            bda[i+5].setAttribute("id",k)
            
          }
         
         
      }
      {
        
        var dba=document.getElementsByClassName('distributionO')
        for(let i=0;i<10;i++)
        {
          dba[i].classList.add('com5cards') 
        }
        
      
        for(let i=0;i<5;i++)
          {
            let j= "com"+(i+1)+"card"
            let k= "com"+(i+1)+"cardc"
            dba[i].setAttribute("id",j)
            dba[i+5].setAttribute("id",k)
            
          } 
          /*
          NOTE I CAN'T DO THIS NOW:
           for(let i=0;i<10;i++)
          {
            bda[i].classList.remove('distributionO') 
          }
          CUZ' IF AT I=0, BDA[0]WILL BE REMOVED THEN,NOW BAD WILL TOTAL HAVE 0-8, SO NEXT BDA[1] WILL REMOVE BDA[2] INSTEAD OF BDA[1] THAT WE THINK OF]
           */
         
        
      }
      {
      
      
  
      var removedisbut=document.getElementsByClassName('my5cards')
      var removedisbuto=document.getElementsByClassName('com5cards')
      for(let i=0;i<10;i++){
        removedisbut[i].classList.remove('distribution')
        removedisbuto[i].classList.remove('distributionO')
      }
    }
  }, 500 )
  
  

}

 //choosing my card and random card for the computer
 

puttingcsandeclassooncards();


for(var i=6;i<11;i++){
     
  let x="my"+(i-5)+"card",y="my"+i+"cardc" 
//when I use VAR, there will be error- x will always be my5card and y will always be my5cardc but this will not be so when I use const and let? WHY???!!
document.getElementsByClassName('tick')[i-6].addEventListener('click',(t)=>{
  {
    var eventtarget=t.target
  eventtarget.parentElement.classList.remove('my5cards')
  eventtarget.parentElement.removeAttribute('id',y)
  eventtarget.parentElement.classList.add('tothemiddlemy')
  }
  {
    let imgpart= document.getElementById(x)
    imgpart.classList.remove('my5cards')
    imgpart.classList.add('tothemiddlemy')
    imgpart.classList.remove('bordersetcover')
    imgpart.removeAttribute('id',x)
    
  }
  {
 
      setTimeout(positioningcomcardsafterclick(),2000)
  }
     })

  }






    
  



