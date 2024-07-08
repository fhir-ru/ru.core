Instance:   core-ns-nsi-sources-of-payment
InstanceOf: NamingSystem
Usage: #definition

* name =   "core-ns-nsi-sources-of-payment"

* status = #active

* kind = #codesystem

* date = "2024-01-01"

* description = " Справочник НСИ Минздрава <Источники оплаты медицинской помощи>, может быть известен под следующими идентификаторами: OID: 1.2.643.5.1.13.13.11.1039, предпочтительно URI: http://fhir.ru/core/CodeSystem/core-cs-nsi-sources-of-payment"

* uniqueId[0]
  * type = #oid
  * value = "1.2.643.5.1.13.13.11.1039"
  * comment = "Основной"

* uniqueId[1]
  * type = #uri
  * preferred = true
  * value = "http://fhir.ru/core/CodeSystem/core-ns-nsi-sources-of-payment"

* uniqueId[2]
  * type = #uri
  * value = "https://nsi.egisz.rosminzdrav.ru/dictionaries/1.2.643.5.1.13.13.11.1039/passport/5.2"
  
Alias: $МЗРФ_Справочник_ИсточникиОплаты = Core_Cs_Nsi_Sources_Of_Payment
CodeSystem: Core_Cs_Nsi_Sources_Of_Payment
Id:         core-cs-nsi-sources-of-payment
Title: "Core CodeSystem NSI sources of payment (Источники оплаты медицинской помощи)"
Description: "НСИ МЗ РФ справочник [Источники оплаты медицинской помощи](http://fhir.ru/core/CodeSystem/core-cs-nsi-sources-of-payment)"

* ^experimental = false

* ^caseSensitive = false

* ^content = #complete

* #1 "Средства обязательного медицинского страхования"
* #3 "Средства добровольного медицинского страхования"
* #4 "Средства пациента"
* #5 "Средства третьих физических лиц"
* #6 "Средства третьих юридических лиц"
* #8 "Средства федерального бюджета"
* #9 "Средства регионального бюджета"
* #10 "Средства обязательного социального страхования"
* #11 "Средства бюджета медицинской организации"
* #12 "Средства федерального и регионального бюджета"
