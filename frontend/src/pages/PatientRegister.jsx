import { useState } from "react";
import PageBreadcrumb from "../components/common/PageBreadCrumb";
import PageMeta from "../components/common/PageMeta";
import ComponentCard from "../components/common/ComponentCard";
import Label from "../components/form/Label";
import Input from "../components/form/input/InputField";
import Select from "../components/form/Select";
import Radio from "../components/form/input/Radio";
import PhoneInput from "../components/form/group-input/PhoneInput";
import TextArea from "../components/form/input/TextArea";
import Button from "../components/ui/button/Button";

const PatientRegister = () => {
  const [selectedValue, setSelectedValue] = useState("option2");
  const [message, setMessage] = useState("");

  const options = [
    { value: "Cat", label: "Cat" },
    { value: "Dog", label: "Dog" },
    { value: "parrot", label: "parrot" },
  ];
  const breedoptions = [
    { value: "Cat", label: "Cat" },
    { value: "Dog", label: "Dog" },
    { value: "parrot", label: "parrot" },
  ];

  const countries = [
    { code: "US", label: "+1" },
    { code: "GB", label: "+44" },
    { code: "CA", label: "+1" },
    { code: "AU", label: "+61" },
    { code: "SL", label: "+94" },
  ];

  const handlePhoneNumberChange = (phoneNumber) => {
    console.log("Updated phone number:", phoneNumber);
  };

  const handleSelectChange = (value) => {
    console.log("Selected value:", value);
  };

  const handleRadioChange = (value) => {
    setSelectedValue(value);
  };

  return (
    <div>
      <PageMeta
        title="React.js Blank Dashboard | TailAdmin - Next.js Admin Dashboard Template"
        description="This is React.js Blank Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Patient Register" />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12 flex justify-center items-baseline gap-5">
        {/* Pet Details */}
        <div className="w-full mx-auto">
          <ComponentCard title="Pet Details">
            <div className="space-y-6">
              <div>
                <Label htmlFor="input">Pet Name</Label>
                <Input type="text" id="input" placeholder="Ex: Kalu" />
              </div>
              <div>
                <Label>Pet Type</Label>
                <Select
                  options={options}
                  placeholder="Select pet type"
                  onChange={handleSelectChange}
                  className="dark:bg-dark-900"
                />
              </div>
              <div>
                <Label>Pet Breed</Label>
                <Select
                  options={breedoptions}
                  placeholder="Select pet type"
                  onChange={handleSelectChange}
                  className="dark:bg-dark-900"
                />
              </div>
              <div>
                <Label htmlFor="input">Pet Age</Label>
                <div className="flex justify-between items-center">
                  <Input type="text" id="input" placeholder="Ex: 6" />
                  <div className="flex justify-center gap-3 items-center">
                    <Radio
                      id="radio1"
                      name="group1"
                      value="option1"
                      checked={selectedValue === "option1"}
                      onChange={handleRadioChange}
                      label="Years"
                    />
                    <Radio
                      id="radio2"
                      name="group2"
                      value="option2"
                      checked={selectedValue === "option2"}
                      onChange={handleRadioChange}
                      label="Months"
                    />
                    <Radio
                      id="radio3"
                      name="group3"
                      value="option3"
                      checked={selectedValue === "option3"}
                      onChange={handleRadioChange}
                      label="Days"
                    />
                  </div>
                </div>
              </div>
              <div>
                <Label htmlFor="input">Pet weight</Label>
                <div className="flex justify-between items-center">
                  <div>
                    <Label htmlFor="input">Kilogram (Kg)</Label>
                    <Input type="text" id="input" placeholder="Ex: 10" />
                  </div>
                  <div>
                    <Label htmlFor="input">Gram (g)</Label>
                    <Input type="text" id="input" placeholder="Ex: 5" />
                  </div>
                </div>
              </div>
              <div>
                <Label htmlFor="input">Allergies</Label>
                <Input type="text" id="input" placeholder="Ex: Sugar" />
              </div>
            </div>
          </ComponentCard>
        </div>
        {/* Owner Details */}
        <div className="w-full mx-auto flex flex-col justify-center gap-14">
          <ComponentCard title="Owner Details">
            <div className="space-y-6">
              <div>
                <Label htmlFor="input">Owner Name</Label>
                <Input type="text" id="input" placeholder="Ex: Jhon Doe" />
              </div>
              <div>
                <Label>Phone</Label>
                <PhoneInput
                  selectPosition="start"
                  countries={countries}
                  placeholder="+1 (555) 000-0000"
                  onChange={handlePhoneNumberChange}
                />
              </div>
              <div>
                <Label htmlFor="input">Address</Label>
                <Input type="text" id="input" placeholder="Ex: Talvita" />
              </div>
              <div>
                <Label>Additional Notes</Label>
                <TextArea
                  value={message}
                  onChange={(value) => setMessage(value)}
                  rows={6}
                />
              </div>
            </div>
          </ComponentCard>
          <div className="w-full">
            <Button className="w-full">Save Details</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientRegister;
