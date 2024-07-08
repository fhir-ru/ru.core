Profile: Core_Address
Id:      core-address
Parent:       Address
Title: "Core Address (Адрес)"
Description: "Адрес"

* use ^short = "Целевое назначение адреса: home | work | temp | old | billing"

* type ^short = "Тип адреса: postal | physical | both"

* text ^short = "Текстовое представление адреса"

* line ^short = "Улица"

* city ^short = "Город"

* state ^short = "Регион"

* postalCode ^short = "Почтовый код"

* country ^short = "Страна"

* period ^short = "Период времени, когда адрес был/является действительным"

* extension contains $Ядро_Расширение_КодыФИАС named fias 0..1 MS


Instance:   core-address-instance-full
InstanceOf: Core_Address
Usage: #inline

* use = #home

* type = #postal

* text = "Россия, г. Санкт-Петербург, Софийская ул., д.32-1-987"

* line = "Софийская 32-1-987"

* city = "Санкт-Петербург"

* state = "Санкт-Петербург"

* postalCode = "192236"

* country = "Россия"

* extension[fias]
  * extension[aoguid]
    * valueIdentifier
      * value = "7b1996be-c0fe-4797-bedc-f503e31a83fd"
      * system = "urn:hl7-ru:fias:aoguid"
  * extension[houseguid]
    * valueIdentifier
      * value = "7b1996be-c0fe-4797-bedc-f503e31a83fd"
      * system = "urn:hl7-ru:fias:houseguid"
