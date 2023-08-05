import { Form, Input, Space, Tag } from "antd";
import React, { useEffect, useRef, useState } from "react";
import ButtonCommon from "../button/button";
import { FormInstance, Rule } from "antd/es/form";

interface TagsCommonProps {
  tags?: string[];
  closable?: boolean;
  label?: string;
  name?: string;
  required?: boolean;
  rules?: Rule[] | undefined;
  form?: FormInstance<any>;
}

const TagsCommon: React.FC<TagsCommonProps> = ({
  tags,
  closable = false,
  label,
  name,
  rules,
  required,
  form,
}) => {
  const [tagsState, setTagsState] = useState<string[]>([]);

  const [duplicateInput, setDuplicateInput] = useState<string>("");
  const [duplicate, setDuplicate] = useState<boolean>(false);
  const [getInput, setInput] = useState<string>("");
  const _setInputInTags = () => {
    if (getInput != "") {
      let tempTags = tagsState;
      let check = tempTags.find((data) => data == getInput);
      if (!check) {
        tempTags.push(getInput);
        setTagsState(tempTags);
        setInput("");
        setDuplicate(false);
      } else {
        setDuplicate(true);
        setDuplicateInput(getInput);
      }
    }
  };

  const _handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      setInput(e.target.value);
      _setInputInTags();
      e.preventDefault();
    }
  };

  const _handClose = (data: string) => {
    let tempTags = tagsState;
    let check = tempTags.indexOf(data);
    if (check > -1) {
      tempTags.splice(check, 1);
      setTagsState(tempTags);
    }
  };

  useEffect(() => {
    if (form) {
      setTimeout(() => {
        let initdata = form.getFieldValue(name ?? "");
        setTagsState(initdata);
      }, 100);
    }
  }, [form]);

  return (
    <>
      <Form.Item
        rules={rules}
        required={required}
        label={label}
        name={name}
        initialValue={tagsState}
      >
        <div className="flex flex-col pb-1">
          <div className="flex gap-4">
            <Input
              disabled={!closable}
              style={{ width: "100%" }}
              onKeyDown={(e: any) => {
                _handleKeyDown(e);
              }}
              onChange={(event) => {
                setInput(event.target.value);
              }}
              value={getInput}
            />

            <ButtonCommon
              disabled={getInput.length > 0 ? (closable ? false : true) : true}
              btnType={getInput.length > 0 ? undefined : "secondary"}
              onClick={() => {
                _setInputInTags();
              }}
              width="w-fit"
            >
              <div className="px-2">+</div>
            </ButtonCommon>
          </div>
          <label
            htmlFor=""
            className={`
            transition-all duration-100 -translate-y-2.5 text-rose-600
            ${
              duplicate && duplicateInput == getInput
                ? "translate-y-1"
                : "opacity-0"
            }
          `}
          >
            {getInput} is duplicate
          </label>
        </div>

        <Space
          className={` transition-all duration-100  ${
            duplicate && duplicateInput == getInput
              ? "translate-y-1"
              : "-translate-y-2.5"
          }`}
          size={[0, 8]}
          wrap
        >
          <label htmlFor="e">Tags: </label> &nbsp;
          {tagsState?.map((data, index) => {
            return (
              <React.Fragment
                key={`tag-index-${data}-${index}-${
                  Math.random() * (1000 - 0 + 1) + 0
                }`}
              >
                <Tag
                  className="select-none"
                  onClose={(e) => {
                    _handClose(data);
                  }}
                  closable={closable}
                >
                  {data}
                </Tag>
              </React.Fragment>
            );
          })}
        </Space>
      </Form.Item>
    </>
  );
};

export default TagsCommon;
