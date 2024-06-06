Profile: Core_Organization
Id: core-organization
Parent: Organization
Title: "Организация (Ru Core)"
Description: "Организация"

* name 1..1 MS
* name ^short = "Полное название организации"
* name only string

* alias 0..*
* alias ^short = "Сокращенное наименование организации"
* alias only string

* address 0..*
* address ^short = "Адрес организации"
* address only Core_Address

* identifier ^slicing.discriminator.type = #value
* identifier ^slicing.discriminator.path = "system"
* identifier ^slicing.rules = #open
* identifier ^slicing.description = "Нарезка по системам: Система выдачи индивидуальных номеров налогоплательщика(ИНН), Справочник ФРМО, Система выдачи государственных регистрационных номеров ЮЛ (ИП) (ОГРН)"
* identifier contains  INN 0..1 
  and FRMO 0..1 
  and OGRN 0..1 

* identifier[INN] ^short = "Государственный идентификационный номер налогоплательщика (ИНН)"
  * value only string
  * system 1..1
  * system = "http://fhir.ru/core/systems/inn" 
  * type 1..1
  * type ^short = "Тип идентификатора, кодируется по Fixed value: http://terminology.hl7.org/CodeSystem/v2-0203" 
  * type = #TAX
  * type from http://terminology.hl7.org/CodeSystem/v2-0203

* identifier[FRMO] ^short = "Федеральный реестр медицинских органзаций МЗ РФ (ФРМО)"
  * value only string
  * system 1..1
  * system = "http://fhir.ru/core/systems/frmo" 
  * type 0..1
  * type ^short = "Тип идентификатора, кодируется по НСИ" 
  
* identifier[OGRN] ^short = "Основной государственный регистрационный номер юридического лица (индивидуального предпринимателя) (ОГРН)"
  * value only string
  * system 1..1
  * system = "http://fhir.ru/core/systems/ogrn" 
  * type 0..1
  * type ^short = "Тип идентификатора, кодируется по Fixed value: http://fhir.ru/core/systems/ogrn"
  


//----------instance-full-------------------------------
Instance: core-organization-instance-full
InstanceOf: Core_Organization
Usage: #example
* name = "САНКТ-ПЕТЕРБУРГСКОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ УЧРЕЖДЕНИЕ ЗДРАВООХРАНЕНИЯ 'ПСИХИАТРИЧЕСКАЯ БОЛЬНИЦА № 1 ИМ. П.П.КАЩЕНКО'"
* address
  * use = #work
  * type = #postal
  * city = "Санкт-Петербург"
  * text = "190005, Россия, г. Санкт-Петербург, наб. р. Фонтанки, д. 132"
  * postalCode = "190005"
  * country = "Россия"
  * extension[fias]
    * extension[aoguid]
      * valueIdentifier
        * value = "796de636-5fd9-4f3d-97ad-c865c60a024d"
        * system = "urn:hl7-ru:fias:aoguid"   
    * extension[houseguid]
      * valueIdentifier
        * value = "19229ca9-d457-4f07-ab86-8d64c868502a"
        * system = "urn:hl7-ru:fias:houseguid"

* alias = "СПБ ГБУЗ 'БОЛЬНИЦА ИМ.П.П.КАЩЕНКО'"
 
* identifier[INN]
  * system = "http://fhir.ru/core/systems/inn"
  * value = "4719008550"
  * type = #TAX
* identifier[FRMO]
  * system = "http://fhir.ru/core/systems/frmo"
  * value = "1.2.643.5.1.13.13.12.2.78.8575"
  
* identifier[OGRN]
  * system = "http://fhir.ru/core/systems/ogrn"
  * value = "1024702086420"