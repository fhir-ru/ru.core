Profile: Core_Observation
Id:      core-observation
Parent:       Observation
Title: " Измерения и простые утверждения о пациенте (Ru Core)"
Description: " Измерения и простые утверждения о пациенте, устройстве или других объектах"

* subject only Reference(Core_Patient)

* encounter only Reference(Core_Encounter)

* performer only Reference(Core_Practitioner or Core_Practitioner_Role)

//----------instance-full-------------------------------
Instance: core-observation-instance-full
InstanceOf: Core_Observation
Usage: #example
* subject = Reference(core-patient-full)

* encounter = Reference(core-encounter-full)

* performer = Reference(core-practitioner-full)

* status = #final

* code
  * coding.system = "http://loinc.org"
  * coding.code = #26038500