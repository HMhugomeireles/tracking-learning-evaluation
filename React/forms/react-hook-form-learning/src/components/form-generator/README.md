
# Form generator

This example the component receive one object with configuration to generate the form, the simple example need to be change to support all type of inputs. 



```jsx 

<FormGenerator 
    formConfigs={[
        {
        name: "Step 1",
        formFields: [
            {
            label: "First name",
            name: "firstName",
            type: "text",
            id: "name"
            },
            {
            label: "Last name",
            name: "lastName",
            type: "text",
            id: "lastName"
            }
        ]
        },
        {
        name: "Step 2",
        formFields: [
            {
            label: "Address",
            name: "address",
            type: "text",
            id: "address"
            },
            {
            label: "Post code",
            name: "postCode",
            type: "number",
            id: "postCode"
            }
        ]
        }
    ]}
    />


```