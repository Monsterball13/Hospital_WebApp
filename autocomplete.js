function autofill(){
    
    var x = document.getElementById('Treatment').value;
    if(x=='Consultation')
    {
        document.getElementById('Income').value= 350;
    }
    if(x=='X-Ray')
    {
        document.getElementById('Income').value= 500;
    }
    if(x=='Nebulisation')
    {
        document.getElementById('Income').value= 70;
    }
    if(x=='Influenza Vaccine')
    {
        document.getElementById('Income').value= 1200;
    }
    if(x=='CBC')
    {
        document.getElementById('Income').value= 230;
    }
    if(x=='CT Scan')
    {
        document.getElementById('Income').value= 6000;
    }
    if(x=='MRI')
    {
        document.getElementById('Income').value= 10000;
    }
    if(x=='Lumbar Puncture')
    {
        document.getElementById('Income').value= 12000;
    }
    if(x=='Biopsy')
    {
        document.getElementById('Income').value= 20000;
    }
    if(x=='Stool Culture')
    {
        document.getElementById('Income').value= 400;
    }
    if(x=='Admit/night')
    {
        document.getElementById('Income').value= 1000;
    }

}