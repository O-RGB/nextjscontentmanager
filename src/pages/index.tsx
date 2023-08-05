import { useState } from "react";
import { NextPage } from "next";
import ContentList from "@/components/content/list";
import { Form, Modal } from "antd";
import ContentPreview from "@/components/content/preview/ContentPreview";
import ButtonCommon from "@/components/common/button/button";

const Home: NextPage = () => {
  const [contentParse, setContentParse] = useState<ContectForSend[]>();
  const [contentForSend, setContentForSend] = useState<
    ContectForSend[] | undefined
  >([]);
  const [form] = Form.useForm();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Modal
        width={"80%"}
        title="Perview"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {contentForSend && (
          <ContentPreview contentForSend={contentForSend}></ContentPreview>
        )}
      </Modal>
      <div className="layout-center">
        <div className="layout gap-3 ">
          <ContentList
            form={form}
            onChange={(e: ContectForSend[]) => {
              setContentForSend(e);
            }}
            setForm={contentParse}
          ></ContentList>
          <div className="py-3">
            <ButtonCommon onClick={showModal}>Preview</ButtonCommon>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
