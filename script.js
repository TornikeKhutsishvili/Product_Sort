// დავამატოთ პროდუქტები ბრაუზერიდან კატეგორიების მიხედვით. სასმელი/საჭმელი.
// სასმელი - ალკოჰოლური/mineral. საჭმელი fruit/ბოსტენული/meat და ა.შ.
// თითოეულ ახალ დამარტებულ პროდუქტს ექნება დასახელება გამოშვების თარიღი, ვადა (სადამდეა ვარგისი), 
// რაოდენობა, ფასი. მექნება select, option-ები თითოეული კატეგორიის გასაფილტრად. 
// რასაც ავირჩევ Select-ში იმ კატეგორიის შესახებ უნდა ამოვიდეს ინფორმაცია.

var tb = document.querySelector("table")
var sel = document.querySelector("select")
var opt = document.querySelector("option")
var cho = document.querySelector(".cho")
var fd = document.querySelector(".fd")
var prod = document.querySelector(".prod")
var mt = document.querySelector(".mt")
var fru = document.querySelector(".fru")
var vegetable = document.querySelector(".vegetable")
var dr = document.querySelector(".dr")
var miner = document.querySelector(".miner")
var carbon = document.querySelector(".carb")
var alkohol = document.querySelector(".alkohol")


var arr = []

class Meat{
    constructor(categ,prodname,Years,term,price,quantity){
        this.categ = categ
        this.prodname = prodname
        this.Years = Years
        this.term = term
        this.price = price
        this.quantity = quantity
    }
}

sel.addEventListener("click", function(){
    if(sel.value == "choose"){
        tb.innerHTML = ""
        tb.innerHTML = `
        <tr>
            <th>პროდუქტის კატეგორია</th>
            <th>პროდუქტის დასახელება</th>
            <th>გამოშვების თარიღი</th>
            <th>ვადა</th>
            <th>ფასი</th>
            <th>რაოდენობა</th>
        </tr>`
    }
});

// full
sel.addEventListener("click", function(){
    var obj1 = new Meat("ხორცეული", "სტეიკი", "2022", "15/10/2022", "15₾", "6")
    var obj2 = new Meat("", "კურდღელი", "2022", "30/12/2022", "12₾", "4")
    var obj3 = new Meat("", "საქონელი", "2022", "18/09/2022", "35₾", "9")
    var obj4 = new Meat("", "ინდაური", "2022", "20/04/2022", "65₾", "7")
    var obj5 = new Meat("", "ქათამი", "2022", "25/06/2022", "7₾", "12")
    var obj6 = new Meat("ხილი", "ვაშლი", "2022", "24/03/2022", "1.5₾", "60")
    var obj7 = new Meat("", "ატამი", "2022", "16/05/2022", "1.2₾", "24")
    var obj8 = new Meat("", "ყურძენი", "2022", "28/08/2022", "3.5₾", "19")
    var obj9 = new Meat("", "ბანანი", "2022", "13/11/2022", "6.5₾", "100")
    var obj10 = new Meat("ბოსტნეული", "სტაფილო", "2022", "14/05/2022", "1.5₾", "12")
    var obj11 = new Meat("", "კიტრი", "2022", "26/08/2022", "2.2₾", "35")
    var obj12 = new Meat("", "კომბოსტო", "2022", "17/06/2022", "1.5₾", "29")
    var obj13 = new Meat("", "ნიორი", "2022", "14/10/2022", "0.8₾", "50")
    var obj14 = new Meat("მინერალური", "ბაკურიანის წყალი", "2022", "04/01/2022", "0.5₾", "84")
    var obj15 = new Meat("", "მთის წყალი", "2022", "15/02/2022", "0.5₾", "26")
    var obj16 = new Meat("", "ლიკანი", "2022", "15/08/2022", "1₾", "45")
    var obj17 = new Meat("", "ბორჯომი", "2022", "24/12/2022", "1₾", "90")
    var obj18 = new Meat("გაზიანი", "კოკა-კოლა", "2022", "05/05/2022", "1.5₾", "45")
    var obj19 = new Meat("", "სპრაიტი", "2022", "23/01/2022", "2₾", "82")
    var obj20 = new Meat("", "პეპსი", "2022", "16/06/2022", "2.4₾", "65")
    var obj21 = new Meat("ალკოჰოლური", "კონიაკი 'სარაჯიშვილი'", "2022", "15/05/2022", "120₾", "184")
    var obj22 = new Meat("", "შოტლანდიური ვისკი", "2022", "30/01/2022", "225₾", "46")
    var obj23 = new Meat("", "წითელი ღვინო", "2022", "10/06/2022", "155₾", "345")
    var tmp = `
    <tr>
        <td>${obj1.categ}</td>
        <td>${obj1.prodname}</td>
        <td>${obj1.Years}</td>
        <td>${obj1.term}</td>
        <td>${obj1.price}</td>
        <td>${obj1.quantity}</td>
    </tr>
        <tr>
        <td>${obj2.categ}</td>
        <td>${obj2.prodname}</td>
        <td>${obj2.Years}</td>
        <td>${obj2.term}</td>
        <td>${obj2.price}</td>
        <td>${obj2.quantity}</td>
    </tr>
        <tr>
        <td>${obj3.categ}</td>
        <td>${obj3.prodname}</td>
        <td>${obj3.Years}</td>
        <td>${obj3.term}</td>
        <td>${obj3.price}</td>
        <td>${obj3.quantity}</td>
    </tr>
    <tr>
        <td>${obj4.categ}</td>
        <td>${obj4.prodname}</td>
        <td>${obj4.Years}</td>
        <td>${obj4.term}</td>
        <td>${obj4.price}</td>
        <td>${obj4.quantity}</td>
    </tr>
    <tr>
        <td>${obj5.categ}</td>
        <td>${obj5.prodname}</td>
        <td>${obj5.Years}</td>
        <td>${obj5.term}</td>
        <td>${obj5.price}</td>
        <td>${obj5.quantity}</td>
    </tr>
    <tr>
        <td>${obj6.categ}</td>
        <td>${obj6.prodname}</td>
        <td>${obj6.Years}</td>
        <td>${obj6.term}</td>
        <td>${obj6.price}</td>
        <td>${obj6.quantity}</td>
    </tr>
    <tr>
        <td>${obj7.categ}</td>
        <td>${obj7.prodname}</td>
        <td>${obj7.Years}</td>
        <td>${obj7.term}</td>
        <td>${obj7.price}</td>
        <td>${obj7.quantity}</td>
    </tr>
    <tr>
        <td>${obj8.categ}</td>
        <td>${obj8.prodname}</td>
        <td>${obj8.Years}</td>
        <td>${obj8.term}</td>
        <td>${obj8.price}</td>
        <td>${obj8.quantity}</td>
    </tr>
    <tr>
        <td>${obj9.categ}</td>
        <td>${obj9.prodname}</td>
        <td>${obj9.Years}</td>
        <td>${obj9.term}</td>
        <td>${obj9.price}</td>
        <td>${obj9.quantity}</td>
    </tr>
    <tr>
        <td>${obj10.categ}</td>
        <td>${obj10.prodname}</td>
        <td>${obj10.Years}</td>
        <td>${obj10.term}</td>
        <td>${obj10.price}</td>
        <td>${obj10.quantity}</td>
    </tr>
    <tr>
        <td>${obj11.categ}</td>
        <td>${obj11.prodname}</td>
        <td>${obj11.Years}</td>
        <td>${obj11.term}</td>
        <td>${obj11.price}</td>
        <td>${obj11.quantity}</td>
    </tr>
    <tr>
        <td>${obj12.categ}</td>
        <td>${obj12.prodname}</td>
        <td>${obj12.Years}</td>
        <td>${obj12.term}</td>
        <td>${obj12.price}</td>
        <td>${obj12.quantity}</td>
    </tr>
    <tr>
        <td>${obj13.categ}</td>
        <td>${obj13.prodname}</td>
        <td>${obj13.Years}</td>
        <td>${obj13.term}</td>
        <td>${obj13.price}</td>
        <td>${obj13.quantity}</td>
    </tr>
    <tr>
        <td>${obj13.categ}</td>
        <td>${obj13.prodname}</td>
        <td>${obj13.Years}</td>
        <td>${obj13.term}</td>
        <td>${obj13.price}</td>
        <td>${obj13.quantity}</td>
    </tr>
    <tr>
        <td>${obj14.categ}</td>
        <td>${obj14.prodname}</td>
        <td>${obj14.Years}</td>
        <td>${obj14.term}</td>
        <td>${obj14.price}</td>
        <td>${obj14.quantity}</td>
    </tr>
    <tr>
        <td>${obj15.categ}</td>
        <td>${obj15.prodname}</td>
        <td>${obj15.Years}</td>
        <td>${obj15.term}</td>
        <td>${obj15.price}</td>
        <td>${obj15.quantity}</td>
    </tr>
    <tr>
        <td>${obj16.categ}</td>
        <td>${obj16.prodname}</td>
        <td>${obj16.Years}</td>
        <td>${obj16.term}</td>
        <td>${obj16.price}</td>
        <td>${obj16.quantity}</td>
    </tr>
    <tr>
        <td>${obj17.categ}</td>
        <td>${obj17.prodname}</td>
        <td>${obj17.Years}</td>
        <td>${obj17.term}</td>
        <td>${obj17.price}</td>
        <td>${obj17.quantity}</td>
    </tr>
    <tr>
        <td>${obj18.categ}</td>
        <td>${obj18.prodname}</td>
        <td>${obj18.Years}</td>
        <td>${obj18.term}</td>
        <td>${obj18.price}</td>
        <td>${obj18.quantity}</td>
    </tr>
    <tr>
        <td>${obj19.categ}</td>
        <td>${obj19.prodname}</td>
        <td>${obj19.Years}</td>
        <td>${obj19.term}</td>
        <td>${obj19.price}</td>
        <td>${obj19.quantity}</td>
    </tr>
    <tr>
        <td>${obj20.categ}</td>
        <td>${obj20.prodname}</td>
        <td>${obj20.Years}</td>
        <td>${obj20.term}</td>
        <td>${obj20.price}</td>
        <td>${obj20.quantity}</td>
    </tr>
    <tr>
        <td>${obj21.categ}</td>
        <td>${obj21.prodname}</td>
        <td>${obj21.Years}</td>
        <td>${obj21.term}</td>
        <td>${obj21.price}</td>
        <td>${obj21.quantity}</td>
    </tr>
    <tr>
        <td>${obj22.categ}</td>
        <td>${obj22.prodname}</td>
        <td>${obj22.Years}</td>
        <td>${obj22.term}</td>
        <td>${obj22.price}</td>
        <td>${obj22.quantity}</td>
    </tr>
    <tr>
        <td>${obj23.categ}</td>
        <td>${obj23.prodname}</td>
        <td>${obj23.Years}</td>
        <td>${obj23.term}</td>
        <td>${obj23.price}</td>
        <td>${obj23.quantity}</td>
    </tr>
        `   
    if(sel.value == "product"){
        arr.push(obj1,obj2,obj3,obj4,obj5,obj6,obj7,obj8,obj9,obj10,obj11,obj12,obj13,obj14,obj15,obj16,obj17,obj18,
                 obj19,obj20,obj21,obj22,obj23)
        tb.innerHTML += tmp
    }
    else if(tb.innerHTML += tmp){
        tb.innerHTML = `
        <tr>
            <th>პროდუქტის კატეგორია</th>
            <th>პროდუქტის დასახელება</th>
            <th>გამოშვების თარიღი</th>
            <th>ვადა</th>
            <th>ფასი</th>
            <th>რაოდენობა</th>
        </tr>` 
    }
});

// food
sel.addEventListener("click", function(){
    var obj1 = new Meat("ხორცეული", "სტეიკი", "2022", "15/10/2022", "15₾", "6")
    var obj2 = new Meat("", "კურდღელი", "2022", "30/12/2022", "12₾", "4")
    var obj3 = new Meat("", "საქონელი", "2022", "18/09/2022", "35₾", "9")
    var obj4 = new Meat("", "ინდაური", "2022", "20/04/2022", "65₾", "7")
    var obj5 = new Meat("", "ქათამი", "2022", "25/06/2022", "7₾", "12")
    var obj6 = new Meat("ხილი", "ვაშლი", "2022", "24/03/2022", "1.5₾", "60")
    var obj7 = new Meat("", "ატამი", "2022", "16/05/2022", "1.2₾", "24")
    var obj8 = new Meat("", "ყურძენი", "2022", "28/08/2022", "3.5₾", "19")
    var obj9 = new Meat("", "ბანანი", "2022", "13/11/2022", "6.5₾", "100")
    var obj10 = new Meat("ბოსტნეული", "სტაფილო", "2022", "14/05/2022", "1.5₾", "12")
    var obj11 = new Meat("", "კიტრი", "2022", "26/08/2022", "2.2₾", "35")
    var obj12 = new Meat("", "კომბოსტო", "2022", "17/06/2022", "1.5₾", "29")
    var obj13 = new Meat("", "ნიორი", "2022", "14/10/2022", "0.8₾", "50")
    var tmp = `
    <tr>
        <td>${obj1.categ}</td>
        <td>${obj1.prodname}</td>
        <td>${obj1.Years}</td>
        <td>${obj1.term}</td>
        <td>${obj1.price}</td>
        <td>${obj1.quantity}</td>
    </tr>
        <tr>
        <td>${obj2.categ}</td>
        <td>${obj2.prodname}</td>
        <td>${obj2.Years}</td>
        <td>${obj2.term}</td>
        <td>${obj2.price}</td>
        <td>${obj2.quantity}</td>
    </tr>
        <tr>
        <td>${obj3.categ}</td>
        <td>${obj3.prodname}</td>
        <td>${obj3.Years}</td>
        <td>${obj3.term}</td>
        <td>${obj3.price}</td>
        <td>${obj3.quantity}</td>
    </tr>
    <tr>
        <td>${obj4.categ}</td>
        <td>${obj4.prodname}</td>
        <td>${obj4.Years}</td>
        <td>${obj4.term}</td>
        <td>${obj4.price}</td>
        <td>${obj4.quantity}</td>
    </tr>
    <tr>
        <td>${obj5.categ}</td>
        <td>${obj5.prodname}</td>
        <td>${obj5.Years}</td>
        <td>${obj5.term}</td>
        <td>${obj5.price}</td>
        <td>${obj5.quantity}</td>
    </tr>
    <tr>
        <td>${obj6.categ}</td>
        <td>${obj6.prodname}</td>
        <td>${obj6.Years}</td>
        <td>${obj6.term}</td>
        <td>${obj6.price}</td>
        <td>${obj6.quantity}</td>
    </tr>
    <tr>
        <td>${obj7.categ}</td>
        <td>${obj7.prodname}</td>
        <td>${obj7.Years}</td>
        <td>${obj7.term}</td>
        <td>${obj7.price}</td>
        <td>${obj7.quantity}</td>
    </tr>
    <tr>
        <td>${obj8.categ}</td>
        <td>${obj8.prodname}</td>
        <td>${obj8.Years}</td>
        <td>${obj8.term}</td>
        <td>${obj8.price}</td>
        <td>${obj8.quantity}</td>
    </tr>
    <tr>
        <td>${obj9.categ}</td>
        <td>${obj9.prodname}</td>
        <td>${obj9.Years}</td>
        <td>${obj9.term}</td>
        <td>${obj9.price}</td>
        <td>${obj9.quantity}</td>
    </tr>
    <tr>
        <td>${obj10.categ}</td>
        <td>${obj10.prodname}</td>
        <td>${obj10.Years}</td>
        <td>${obj10.term}</td>
        <td>${obj10.price}</td>
        <td>${obj10.quantity}</td>
    </tr>
    <tr>
        <td>${obj11.categ}</td>
        <td>${obj11.prodname}</td>
        <td>${obj11.Years}</td>
        <td>${obj11.term}</td>
        <td>${obj11.price}</td>
        <td>${obj11.quantity}</td>
    </tr>
    <tr>
        <td>${obj12.categ}</td>
        <td>${obj12.prodname}</td>
        <td>${obj12.Years}</td>
        <td>${obj12.term}</td>
        <td>${obj12.price}</td>
        <td>${obj12.quantity}</td>
    </tr>
    <tr>
        <td>${obj13.categ}</td>
        <td>${obj13.prodname}</td>
        <td>${obj13.Years}</td>
        <td>${obj13.term}</td>
        <td>${obj13.price}</td>
        <td>${obj13.quantity}</td>
    </tr>
        `   
    if(sel.value == "food"){
        arr.push(obj1,obj2,obj3,obj4,obj5,obj6,obj7,obj8,obj9,obj10,obj11,obj12,obj13)
        tb.innerHTML += tmp
    }
    else if(sel.value == "food"){
        tb.innerHTML = `
        <tr>
            <th>პროდუქტის კატეგორია</th>
            <th>პროდუქტის დასახელება</th>
            <th>გამოშვების თარიღი</th>
            <th>ვადა</th>
            <th>ფასი</th>
            <th>რაოდენობა</th>
        </tr>` 
    }
});

// meat
sel.addEventListener("click", function(){
    var obj = new Meat("ხორცეული", "სტეიკი", "2022", "15/10/2022", "15₾", "6")
    var obj1 = new Meat("", "კურდღელი", "2022", "30/12/2022", "12₾", "4")
    var obj2 = new Meat("", "საქონელი", "2022", "18/09/2022", "35₾", "9")
    var obj3 = new Meat("", "ინდაური", "2022", "20/04/2022", "65₾", "7")
    var obj4 = new Meat("", "ქათამი", "2022", "25/06/2022", "7₾", "12")
    var tmp = `
    <tr>
        <td>${obj.categ}</td>
        <td>${obj.prodname}</td>
        <td>${obj.Years}</td>
        <td>${obj.term}</td>
        <td>${obj.price}</td>
        <td>${obj.quantity}</td>
    </tr>
        <tr>
        <td>${obj1.categ}</td>
        <td>${obj1.prodname}</td>
        <td>${obj1.Years}</td>
        <td>${obj1.term}</td>
        <td>${obj1.price}</td>
        <td>${obj1.quantity}</td>
    </tr>
        <tr>
        <td>${obj2.categ}</td>
        <td>${obj2.prodname}</td>
        <td>${obj2.Years}</td>
        <td>${obj2.term}</td>
        <td>${obj2.price}</td>
        <td>${obj2.quantity}</td>
    </tr>
    <tr>
        <td>${obj3.categ}</td>
        <td>${obj3.prodname}</td>
        <td>${obj3.Years}</td>
        <td>${obj3.term}</td>
        <td>${obj3.price}</td>
        <td>${obj3.quantity}</td>
    </tr>
    <tr>
        <td>${obj4.categ}</td>
        <td>${obj4.prodname}</td>
        <td>${obj4.Years}</td>
        <td>${obj4.term}</td>
        <td>${obj4.price}</td>
        <td>${obj4.quantity}</td>
    </tr>
        `   
    if(sel.value == "meat"){
        arr.push(obj,obj1,obj2,obj3,obj4)
        tb.innerHTML += tmp
    }
    else if(sel.value == "meat"){
        tb.innerHTML = `
        <tr>
            <th>პროდუქტის კატეგორია</th>
            <th>პროდუქტის დასახელება</th>
            <th>გამოშვების თარიღი</th>
            <th>ვადა</th>
            <th>ფასი</th>
            <th>რაოდენობა</th>
        </tr>` 
    }
});

// fruit
sel.addEventListener("click", function(){
    var obj = new Meat("ხილი", "ვაშლი", "2022", "24/03/2022", "1.5₾", "60")
    var obj1 = new Meat("", "ატამი", "2022", "16/05/2022", "1.2₾", "24")
    var obj2 = new Meat("", "ყურძენი", "2022", "28/08/2022", "3.5₾", "19")
    var obj3 = new Meat("", "ბანანი", "2022", "13/11/2022", "6.5₾", "100")
    var tmp = `
    <tr>
        <td>${obj.categ}</td>
        <td>${obj.prodname}</td>
        <td>${obj.Years}</td>
        <td>${obj.term}</td>
        <td>${obj.price}</td>
        <td>${obj.quantity}</td>
    </tr>
        <tr>
        <td>${obj1.categ}</td>
        <td>${obj1.prodname}</td>
        <td>${obj1.Years}</td>
        <td>${obj1.term}</td>
        <td>${obj1.price}</td>
        <td>${obj1.quantity}</td>
    </tr>
        <tr>
        <td>${obj2.categ}</td>
        <td>${obj2.prodname}</td>
        <td>${obj2.Years}</td>
        <td>${obj2.term}</td>
        <td>${obj2.price}</td>
        <td>${obj2.quantity}</td>
    </tr>
    <tr>
        <td>${obj3.categ}</td>
        <td>${obj3.prodname}</td>
        <td>${obj3.Years}</td>
        <td>${obj3.term}</td>
        <td>${obj3.price}</td>
        <td>${obj3.quantity}</td>
    </tr>
        `   
    if(sel.value == "fruit"){
        arr.push(obj,obj1,obj2,obj3)
        tb.innerHTML += tmp
    }
    else if(sel.value == "fruit"){
        tb.innerHTML = `
        <tr>
            <th>პროდუქტის კატეგორია</th>
            <th>პროდუქტის დასახელება</th>
            <th>გამოშვების თარიღი</th>
            <th>ვადა</th>
            <th>ფასი</th>
            <th>რაოდენობა</th>
        </tr>` 
    }
});

// vegetable
sel.addEventListener("click", function(){

    var obj = new Meat("ბოსტნეული", "სტაფილო", "2022", "14/05/2022", "1.5₾", "12")
    var obj1 = new Meat("", "კიტრი", "2022", "26/08/2022", "2.2₾", "35")
    var obj2 = new Meat("", "კომბოსტო", "2022", "17/06/2022", "1.5₾", "29")
    var obj3 = new Meat("", "ნიორი", "2022", "14/10/2022", "0.8₾", "50")
    var tmp = `
    <tr>
        <td>${obj.categ}</td>
        <td>${obj.prodname}</td>
        <td>${obj.Years}</td>
        <td>${obj.term}</td>
        <td>${obj.price}</td>
        <td>${obj.quantity}</td>
    </tr>
        <tr>
        <td>${obj1.categ}</td>
        <td>${obj1.prodname}</td>
        <td>${obj1.Years}</td>
        <td>${obj1.term}</td>
        <td>${obj1.price}</td>
        <td>${obj1.quantity}</td>
    </tr>
        <tr>
        <td>${obj2.categ}</td>
        <td>${obj2.prodname}</td>
        <td>${obj2.Years}</td>
        <td>${obj2.term}</td>
        <td>${obj2.price}</td>
        <td>${obj2.quantity}</td>
    </tr>
    <tr>
        <td>${obj3.categ}</td>
        <td>${obj3.prodname}</td>
        <td>${obj3.Years}</td>
        <td>${obj3.term}</td>
        <td>${obj3.price}</td>
        <td>${obj3.quantity}</td>
    </tr>
        `   
    if(sel.value == "veget"){
        arr.push(obj,obj1,obj2,obj3)
        tb.innerHTML += tmp
    }
    else if(sel.value == "veget"){
        tb.innerHTML = `
        <tr>
            <th>პროდუქტის კატეგორია</th>
            <th>პროდუქტის დასახელება</th>
            <th>გამოშვების თარიღი</th>
            <th>ვადა</th>
            <th>ფასი</th>
            <th>რაოდენობა</th>
        </tr>` 
    }
});

// drink
sel.addEventListener("click", function(){
    var obj4 = new Meat("მინერალური", "ბაკურიანის წყალი", "2022", "04/01/2022", "0.5₾", "84")
    var obj5 = new Meat("", "მთის წყალი", "2022", "15/02/2022", "0.5₾", "26")
    var obj6 = new Meat("", "ლიკანი", "2022", "15/08/2022", "1₾", "45")
    var obj7 = new Meat("", "ბორჯომი", "2022", "24/12/2022", "1₾", "90")
    var obj8 = new Meat("გაზიანი", "კოკა-კოლა", "2022", "05/05/2022", "1.5₾", "45")
    var obj9 = new Meat("", "სპრაიტი", "2022", "23/01/2022", "2₾", "82")
    var obj10 = new Meat("", "პეპსი", "2022", "16/06/2022", "2.4₾", "65")
    var obj11 = new Meat("ალკოჰოლური", "კონიაკი 'სარაჯიშვილი'", "2022", "15/05/2022", "120₾", "184")
    var obj12 = new Meat("", "შოტლანდიური ვისკი", "2022", "30/01/2022", "225₾", "46")
    var obj13 = new Meat("", "წითელი ღვინო", "2022", "10/06/2022", "155₾", "345")
    var tmp = `
    <tr>
        <td>${obj4.categ}</td>
        <td>${obj4.prodname}</td>
        <td>${obj4.Years}</td>
        <td>${obj4.term}</td>
        <td>${obj4.price}</td>
        <td>${obj4.quantity}</td>
    </tr>
    <tr>
        <td>${obj5.categ}</td>
        <td>${obj5.prodname}</td>
        <td>${obj5.Years}</td>
        <td>${obj5.term}</td>
        <td>${obj5.price}</td>
        <td>${obj5.quantity}</td>
    </tr>
    <tr>
        <td>${obj6.categ}</td>
        <td>${obj6.prodname}</td>
        <td>${obj6.Years}</td>
        <td>${obj6.term}</td>
        <td>${obj6.price}</td>
        <td>${obj6.quantity}</td>
    </tr>
    <tr>
        <td>${obj7.categ}</td>
        <td>${obj7.prodname}</td>
        <td>${obj7.Years}</td>
        <td>${obj7.term}</td>
        <td>${obj7.price}</td>
        <td>${obj7.quantity}</td>
    </tr>
    <tr>
        <td>${obj8.categ}</td>
        <td>${obj8.prodname}</td>
        <td>${obj8.Years}</td>
        <td>${obj8.term}</td>
        <td>${obj8.price}</td>
        <td>${obj8.quantity}</td>
    </tr>
    <tr>
        <td>${obj9.categ}</td>
        <td>${obj9.prodname}</td>
        <td>${obj9.Years}</td>
        <td>${obj9.term}</td>
        <td>${obj9.price}</td>
        <td>${obj9.quantity}</td>
    </tr>
    <tr>
        <td>${obj10.categ}</td>
        <td>${obj10.prodname}</td>
        <td>${obj10.Years}</td>
        <td>${obj10.term}</td>
        <td>${obj10.price}</td>
        <td>${obj10.quantity}</td>
    </tr>
    <tr>
        <td>${obj11.categ}</td>
        <td>${obj11.prodname}</td>
        <td>${obj11.Years}</td>
        <td>${obj11.term}</td>
        <td>${obj11.price}</td>
        <td>${obj11.quantity}</td>
    </tr>
    <tr>
        <td>${obj12.categ}</td>
        <td>${obj12.prodname}</td>
        <td>${obj12.Years}</td>
        <td>${obj12.term}</td>
        <td>${obj12.price}</td>
        <td>${obj12.quantity}</td>
    </tr>
    <tr>
        <td>${obj13.categ}</td>
        <td>${obj13.prodname}</td>
        <td>${obj13.Years}</td>
        <td>${obj13.term}</td>
        <td>${obj13.price}</td>
        <td>${obj13.quantity}</td>
    </tr>
        `   
    if(sel.value == "drink"){
        arr.push(obj4,obj5,obj6,obj7,obj8,obj9,obj10,obj11,obj12,obj13)
        tb.innerHTML += tmp
    }
    else if(sel.value == "drink"){
        tb.innerHTML = `
        <tr>
            <th>პროდუქტის კატეგორია</th>
            <th>პროდუქტის დასახელება</th>
            <th>გამოშვების თარიღი</th>
            <th>ვადა</th>
            <th>ფასი</th>
            <th>რაოდენობა</th>
        </tr>` 
    }
});

// mineral
sel.addEventListener("click", function(){
    var obj = new Meat("მინერალური", "ბაკურიანის წყალი", "2022", "04/01/2022", "0.5₾", "84")
    var obj1 = new Meat("", "მთის წყალი", "2022", "15/02/2022", "0.5₾", "26")
    var obj2 = new Meat("", "ლიკანი", "2022", "15/08/2022", "1₾", "45")
    var obj3 = new Meat("", "ბორჯომი", "2022", "24/12/2022", "1₾", "90")
    var tmp = `
    <tr>
        <td>${obj.categ}</td>
        <td>${obj.prodname}</td>
        <td>${obj.Years}</td>
        <td>${obj.term}</td>
        <td>${obj.price}</td>
        <td>${obj.quantity}</td>
    </tr>
        <tr>
        <td>${obj1.categ}</td>
        <td>${obj1.prodname}</td>
        <td>${obj1.Years}</td>
        <td>${obj1.term}</td>
        <td>${obj1.price}</td>
        <td>${obj1.quantity}</td>
    </tr>
        <tr>
        <td>${obj2.categ}</td>
        <td>${obj2.prodname}</td>
        <td>${obj2.Years}</td>
        <td>${obj2.term}</td>
        <td>${obj2.price}</td>
        <td>${obj2.quantity}</td>
    </tr>
    <tr>
        <td>${obj3.categ}</td>
        <td>${obj3.prodname}</td>
        <td>${obj3.Years}</td>
        <td>${obj3.term}</td>
        <td>${obj3.price}</td>
        <td>${obj3.quantity}</td>
    </tr>
        `   
    if(sel.value == "mineral"){
        arr.push(obj,obj1,obj2,obj3)
        tb.innerHTML += tmp
    }
    else if(sel.value == "mineral"){
        tb.innerHTML = `
        <tr>
            <th>პროდუქტის კატეგორია</th>
            <th>პროდუქტის დასახელება</th>
            <th>გამოშვების თარიღი</th>
            <th>ვადა</th>
            <th>ფასი</th>
            <th>რაოდენობა</th>
        </tr>` 
    }
});

// carbon
sel.addEventListener("click", function(){
    var obj = new Meat("გაზიანი", "კოკა-კოლა", "2022", "05/05/2022", "1.5₾", "45")
    var obj1 = new Meat("", "სპრაიტი", "2022", "23/01/2022", "2₾", "82")
    var obj2 = new Meat("", "პეპსი", "2022", "16/06/2022", "2.4₾", "65")
    var tmp = `
    <tr>
        <td>${obj.categ}</td>
        <td>${obj.prodname}</td>
        <td>${obj.Years}</td>
        <td>${obj.term}</td>
        <td>${obj.price}</td>
        <td>${obj.quantity}</td>
    </tr>
        <tr>
        <td>${obj1.categ}</td>
        <td>${obj1.prodname}</td>
        <td>${obj1.Years}</td>
        <td>${obj1.term}</td>
        <td>${obj1.price}</td>
        <td>${obj1.quantity}</td>
    </tr>
        <tr>
        <td>${obj2.categ}</td>
        <td>${obj2.prodname}</td>
        <td>${obj2.Years}</td>
        <td>${obj2.term}</td>
        <td>${obj2.price}</td>
        <td>${obj2.quantity}</td>
    </tr>
        `   
    if(sel.value == "carb"){
        arr.push(obj,obj1,obj2)
        tb.innerHTML += tmp
    }
    else if(sel.value == "carb"){
        tb.innerHTML = `
        <tr>
            <th>პროდუქტის კატეგორია</th>
            <th>პროდუქტის დასახელება</th>
            <th>გამოშვების თარიღი</th>
            <th>ვადა</th>
            <th>ფასი</th>
            <th>რაოდენობა</th>
        </tr>` 
    }
});

// alkohol
sel.addEventListener("click", function(){
    var obj = new Meat("ალკოჰოლური", "კონიაკი 'სარაჯიშვილი'", "2022", "15/05/2022", "120₾", "184")
    var obj1 = new Meat("", "შოტლანდიური ვისკი", "2022", "30/01/2022", "225₾", "46")
    var obj2 = new Meat("", "წითელი ღვინო", "2022", "10/06/2022", "155₾", "345")
    var tmp = `
    <tr>
        <td>${obj.categ}</td>
        <td>${obj.prodname}</td>
        <td>${obj.Years}</td>
        <td>${obj.term}</td>
        <td>${obj.price}</td>
        <td>${obj.quantity}</td>
    </tr>
        <tr>
        <td>${obj1.categ}</td>
        <td>${obj1.prodname}</td>
        <td>${obj1.Years}</td>
        <td>${obj1.term}</td>
        <td>${obj1.price}</td>
        <td>${obj1.quantity}</td>
    </tr>
        <tr>
        <td>${obj2.categ}</td>
        <td>${obj2.prodname}</td>
        <td>${obj2.Years}</td>
        <td>${obj2.term}</td>
        <td>${obj2.price}</td>
        <td>${obj2.quantity}</td>
    </tr>
        `   
    if(sel.value == "alkoh"){
        arr.push(obj,obj1,obj2)
        tb.innerHTML += tmp
    }
    else if(sel.value == "alkoh"){
        tb.innerHTML = `
        <tr>
            <th>პროდუქტის კატეგორია</th>
            <th>პროდუქტის დასახელება</th>
            <th>გამოშვების თარიღი</th>
            <th>ვადა</th>
            <th>ფასი</th>
            <th>რაოდენობა</th>
        </tr>` 
    }
});