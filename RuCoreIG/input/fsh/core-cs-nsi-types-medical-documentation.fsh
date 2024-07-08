Instance:   core-ns-nsi-types-medical-documentation
InstanceOf: NamingSystem
Usage: #definition

* name =   "core-ns-nsi-types-medical-documentation"

* status = #active

* kind = #codesystem

* date = "2024-01-01"

* description = " Справочник НСИ Минздрава <Виды медицинской документации>, может быть известен под следующими идентификаторами: OID: 1.2.643.5.1.13.13.11.1522, Дополнительный OID:???, предпочтительно URI: https://nsi.rosminzdrav.ru/dictionaries/1.2.643.5.1.13.13.11.1522/passport/7.24"

* uniqueId[0]
  * type = #oid
  * value = "1.2.643.5.1.13.13.11.1522"
  * comment = "Основной"

* uniqueId[1]
  * type = #uri
  * preferred = true
  * value = "http://fhir.ru/core/CodeSystem/core-ns-nsi-types-medical-documentation"

* uniqueId[2]
  * type = #uri
  * value = "https://nsi.rosminzdrav.ru/dictionaries/1.2.643.5.1.13.13.11.1522/passport/7.24"



Alias: $МЗРФ_Справочник_ВидыМедицинскойДокументации = Core_Cs_Nsi_Types_Medical_Documentation
CodeSystem: Core_Cs_Nsi_Types_Medical_Documentation
Id:         core-cs-nsi-types-medical-documentation
Title: "Core CodeSystem NSI types of medical documentation (Виды медицинской документации)"
Description: "НСИ МЗ РФ справочник [Виды медицинской документации](http://fhir.ru/core/CodeSystem/core-cs-nsi-types-medical-documentation)"

* ^experimental = false

* ^caseSensitive = false

* ^content = #not-present
