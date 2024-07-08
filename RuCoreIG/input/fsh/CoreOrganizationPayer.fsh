Profile: Core_Organization_Payer
Id: core-organization-payer
Parent: Core_Organization
Title: "Core Organisation Payer (Организация-плательщик)"
Description: "Организация плательщик"

//* identifier[INN] 1..1
//
////----------instance-full-------------------------------
//Instance: core-organization-payer-instance-full
//InstanceOf: Core_Organization_Payer
//Usage: #example
//* address
//  * use = #work
//  * type = #postal
//  * city = "Санкт-Петербург"
//  * text = "195248, г.Санкт-Петербург, Бокситогорская ул, д.9 л.Д, помещ. 17"
//  * postalCode = "195248"
//  * country = "Россия"
//  * extension[fias]
//    * extension[aoguid]
//      * valueIdentifier
//        * value = "c6147288-ca38-4b53-9d76-05128ad88d4e"
//        * system = "urn:hl7-ru:fias:aoguid"   
//    * extension[houseguid]
//      * valueIdentifier
//        * value = "2933159f-177b-4620-a32e-0d41fc847a82"
//        * system = "urn:hl7-ru:fias:houseguid"

* alias = "ООО «ТД ЗАВОДЫ СПБ»"

* identifier[INN]
  * system = "http://fhir.ru/core/systems/inn"
  * value = "7806605614"
  * type = #TAX

* identifier[OGRN]
  * system = "http://fhir.ru/core/systems/ogrn"
  * value = "1227800154977"

* name = "ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ «ТОРГОВЫЙ ДОМ ЗАВОДЫ СПБ»"
