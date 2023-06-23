/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  SwitchField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Workorder } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button
            size="small"
            variation="link"
            isDisabled={hasError}
            onClick={addItem}
          >
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function WorkorderCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    userID: "",
    employeeID: "",
    completionImage: [],
    usercompletion: false,
    workercompletion: false,
    money: "",
  };
  const [userID, setUserID] = React.useState(initialValues.userID);
  const [employeeID, setEmployeeID] = React.useState(initialValues.employeeID);
  const [completionImage, setCompletionImage] = React.useState(
    initialValues.completionImage
  );
  const [usercompletion, setUsercompletion] = React.useState(
    initialValues.usercompletion
  );
  const [workercompletion, setWorkercompletion] = React.useState(
    initialValues.workercompletion
  );
  const [money, setMoney] = React.useState(initialValues.money);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setUserID(initialValues.userID);
    setEmployeeID(initialValues.employeeID);
    setCompletionImage(initialValues.completionImage);
    setCurrentCompletionImageValue("");
    setUsercompletion(initialValues.usercompletion);
    setWorkercompletion(initialValues.workercompletion);
    setMoney(initialValues.money);
    setErrors({});
  };
  const [currentCompletionImageValue, setCurrentCompletionImageValue] =
    React.useState("");
  const completionImageRef = React.createRef();
  const validations = {
    userID: [{ type: "Required" }],
    employeeID: [],
    completionImage: [],
    usercompletion: [],
    workercompletion: [],
    money: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          userID,
          employeeID,
          completionImage,
          usercompletion,
          workercompletion,
          money,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new Workorder(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "WorkorderCreateForm")}
      {...rest}
    >
      <TextField
        label="User id"
        isRequired={true}
        isReadOnly={false}
        value={userID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userID: value,
              employeeID,
              completionImage,
              usercompletion,
              workercompletion,
              money,
            };
            const result = onChange(modelFields);
            value = result?.userID ?? value;
          }
          if (errors.userID?.hasError) {
            runValidationTasks("userID", value);
          }
          setUserID(value);
        }}
        onBlur={() => runValidationTasks("userID", userID)}
        errorMessage={errors.userID?.errorMessage}
        hasError={errors.userID?.hasError}
        {...getOverrideProps(overrides, "userID")}
      ></TextField>
      <TextField
        label="Employee id"
        isRequired={false}
        isReadOnly={false}
        value={employeeID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userID,
              employeeID: value,
              completionImage,
              usercompletion,
              workercompletion,
              money,
            };
            const result = onChange(modelFields);
            value = result?.employeeID ?? value;
          }
          if (errors.employeeID?.hasError) {
            runValidationTasks("employeeID", value);
          }
          setEmployeeID(value);
        }}
        onBlur={() => runValidationTasks("employeeID", employeeID)}
        errorMessage={errors.employeeID?.errorMessage}
        hasError={errors.employeeID?.hasError}
        {...getOverrideProps(overrides, "employeeID")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              userID,
              employeeID,
              completionImage: values,
              usercompletion,
              workercompletion,
              money,
            };
            const result = onChange(modelFields);
            values = result?.completionImage ?? values;
          }
          setCompletionImage(values);
          setCurrentCompletionImageValue("");
        }}
        currentFieldValue={currentCompletionImageValue}
        label={"Completion image"}
        items={completionImage}
        hasError={errors?.completionImage?.hasError}
        errorMessage={errors?.completionImage?.errorMessage}
        setFieldValue={setCurrentCompletionImageValue}
        inputFieldRef={completionImageRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Completion image"
          isRequired={false}
          isReadOnly={false}
          value={currentCompletionImageValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.completionImage?.hasError) {
              runValidationTasks("completionImage", value);
            }
            setCurrentCompletionImageValue(value);
          }}
          onBlur={() =>
            runValidationTasks("completionImage", currentCompletionImageValue)
          }
          errorMessage={errors.completionImage?.errorMessage}
          hasError={errors.completionImage?.hasError}
          ref={completionImageRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "completionImage")}
        ></TextField>
      </ArrayField>
      <SwitchField
        label="Usercompletion"
        defaultChecked={false}
        isDisabled={false}
        isChecked={usercompletion}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userID,
              employeeID,
              completionImage,
              usercompletion: value,
              workercompletion,
              money,
            };
            const result = onChange(modelFields);
            value = result?.usercompletion ?? value;
          }
          if (errors.usercompletion?.hasError) {
            runValidationTasks("usercompletion", value);
          }
          setUsercompletion(value);
        }}
        onBlur={() => runValidationTasks("usercompletion", usercompletion)}
        errorMessage={errors.usercompletion?.errorMessage}
        hasError={errors.usercompletion?.hasError}
        {...getOverrideProps(overrides, "usercompletion")}
      ></SwitchField>
      <SwitchField
        label="Workercompletion"
        defaultChecked={false}
        isDisabled={false}
        isChecked={workercompletion}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              userID,
              employeeID,
              completionImage,
              usercompletion,
              workercompletion: value,
              money,
            };
            const result = onChange(modelFields);
            value = result?.workercompletion ?? value;
          }
          if (errors.workercompletion?.hasError) {
            runValidationTasks("workercompletion", value);
          }
          setWorkercompletion(value);
        }}
        onBlur={() => runValidationTasks("workercompletion", workercompletion)}
        errorMessage={errors.workercompletion?.errorMessage}
        hasError={errors.workercompletion?.hasError}
        {...getOverrideProps(overrides, "workercompletion")}
      ></SwitchField>
      <TextField
        label="Money"
        isRequired={true}
        isReadOnly={false}
        value={money}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userID,
              employeeID,
              completionImage,
              usercompletion,
              workercompletion,
              money: value,
            };
            const result = onChange(modelFields);
            value = result?.money ?? value;
          }
          if (errors.money?.hasError) {
            runValidationTasks("money", value);
          }
          setMoney(value);
        }}
        onBlur={() => runValidationTasks("money", money)}
        errorMessage={errors.money?.errorMessage}
        hasError={errors.money?.hasError}
        {...getOverrideProps(overrides, "money")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
