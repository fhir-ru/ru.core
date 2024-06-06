Profile: Core_Related_Person
Id: core-related-person
Parent: RelatedPerson
Title: "Лицо, имеющее связь с пациентом(Ru Core)"
Description: "Лицо, имеющее связь с пациентом"

* patient only Reference(Core_Patient)

* address only Core_Address

//----------instance-full-------------------------------
Instance: core-related-person-instance-full
InstanceOf: Core_Related_Person
Usage: #example

* patient = Reference(core-patient-instance-full)

* address = core-address-instance-full 

* birthDate = "1960-10-20"

* name
  * family = "Габсбург-Лотарингский"
  * given[0] = "Михаил"
  * given[1] = "Иванович"
  * use = #official

* gender = #male