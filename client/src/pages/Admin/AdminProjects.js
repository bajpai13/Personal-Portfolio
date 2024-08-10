import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, message, Modal } from "antd";
import { HideLoading, ReloadData, ShowLoading } from "../../redux/rootSlice";
import axios from "axios";

function AdminProjects() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const { projects } = portfolioData;
  const [showAddEditModal, setShowAddEditModal] = React.useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = React.useState(null);
  const [type, setType] = React.useState("add");

  const [form] = Form.useForm(); // Create a form instance

  useEffect(() => {
    if (selectedItemForEdit) {
      // Split the technologies string into an array if it exists
      form.setFieldsValue({
        ...selectedItemForEdit,
        technologies: selectedItemForEdit.technologies?.join(", "),
      });
    } else {
      form.resetFields();
    }
  }, [selectedItemForEdit, form]);

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      let response;
      // Convert the technologies string back to an array
      const formattedValues = {
        ...values,
        technologies: values.technologies
          ? values.technologies.split(",").map((tech) => tech.trim())
          : [],
      };
      if (selectedItemForEdit) {
        response = await axios.post(
          "https://personal-portfolio-backend-sigma.vercel.app/api/portfolio/update-project",
          {
            ...formattedValues,
            _id: selectedItemForEdit._id,
          }
        );
      } else {
        response = await axios.post(
          "https://personal-portfolio-backend-sigma.vercel.app/api/portfolio/add-project",
          formattedValues
        );
      }
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        setShowAddEditModal(false);
        setSelectedItemForEdit(null);
        dispatch(ReloadData(true));
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  const onDelete = async (item) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post(
        "https://personal-portfolio-backend-sigma.vercel.app/api/portfolio/delete-project",
        {
          _id: item._id,
        }
      );
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        dispatch(ReloadData(true));
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  return (
    <div>
      <div className="flex justify-end">
        <button
          className="bg-primary px-6 py-2 text-white"
          onClick={() => {
            setSelectedItemForEdit(null);
            form.resetFields(); // Reset form fields when adding a new project
            setShowAddEditModal(true);
            setType("add");
          }}
        >
          Add Project
        </button>
      </div>
      <div className="grid grid-cols-4 gap-5 mt-5 sm:grid-cols-1">
        {projects.map((project) => (
          <div
            key={project._id}
            className="shadow border-2 p-6 border-gray-400 flex flex-col gap-5"
          >
            <h1 className="text-xl font-bold">{project.title}</h1>
            <img src={project.image} alt="" className="h-60 w-80" />

            <h1>{project.description}</h1>
            <div className="flex justify-end gap-5 mt-5">
              <button
                className="bg-primary text-white px-6 py-2"
                onClick={() => {
                  setSelectedItemForEdit(project);
                  setShowAddEditModal(true);
                  setType("edit");
                }}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-6 py-2"
                onClick={() => {
                  onDelete(project);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {showAddEditModal && (
        <Modal
          visible={showAddEditModal}
          title={selectedItemForEdit ? "Edit Project" : "Add Project"}
          footer={null}
          onCancel={() => setShowAddEditModal(false)}
        >
          <Form layout="vertical" form={form} onFinish={onFinish}>
            <Form.Item name="title" label="Title">
              <input placeholder="Title" />
            </Form.Item>
            <Form.Item name="image" label="Image URL">
              <input placeholder="Image URL" />
            </Form.Item>
            <Form.Item name="description" label="Description">
              <input placeholder="Description" />
            </Form.Item>
            <Form.Item name="link" label="Link">
              <input placeholder="Link" />
            </Form.Item>
            <Form.Item name="technologies" label="Technologies">
              <input placeholder="Technologies (comma separated)" />
            </Form.Item>

            <div className="flex justify-end">
              <button
                className="border-primary text-primary px-5 py-2"
                type="button"
                onClick={() => setShowAddEditModal(false)}
              >
                Cancel
              </button>
              <button className="bg-primary text-white px-5 py-2" type="submit">
                {selectedItemForEdit ? "Update" : "Add"}
              </button>
            </div>
          </Form>
        </Modal>
      )}
    </div>
  );
}

export default AdminProjects;
