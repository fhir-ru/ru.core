Profile: Core_Practitioner_Role
Id:      core-practitioner-role
Parent:       PractitionerRole
Title: "Core PractitionerRole (Роль/должность сотрудника)"
Description: " Роль (должность) врача, медицинского работника, специалиста"

* practitioner only Reference(Core_Practitioner)

* organization only Reference(Core_Organization)

* code from http://terminology.hl7.org/ValueSet/v2-0360  (example)

* code 0..*
  * coding.system 1..1
  * coding.system = "http://fhir.ru/core/systems/medical-workers-positions"


// 
//--------------------------------------
Instance: core-practitioner-role-instance-full
InstanceOf: Core_Practitioner_Role
Usage: #example
* practitioner = Reference(core-practitioner-instance-full)

* organization = Reference(core-organization-instance-full)

* code = http://fhir.ru/core/systems/medical-workers-positions#13 "врач-акушер-гинеколог"
  
