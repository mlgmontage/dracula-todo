import styled from "@emotion/styled";
import { showTaskModal, toggleTaskModal } from "entities/modals";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field } from "formik";
import { Button, Close, Input, ModalTitle, Overlay, Textarea } from "shared/ui";
import { createTask, Task } from "entities/tasks";

const TaskForm = styled(Form)`
  float: right;
  width: 360px;
  min-height: 100vh;

  background-color: var(--bg);
`;

export const CreateTask = () => {
  const dispatch = useDispatch();
  const showModal = useSelector(showTaskModal);

  return (
    <>
      {showModal &&
        createPortal(
          <Overlay>
            <Formik
              initialValues={{
                text: "",
                date: "",
                tags: [],
                category: false,
              }}
              onSubmit={(values) => {
                console.warn(values);
                dispatch(
                  createTask({
                    text: values.text,
                    date: values.date,
                    category: values.category ? "important" : "basic",
                    tags: values.tags,
                  })
                );
                dispatch(toggleTaskModal());
              }}
            >
              {() => {
                return (
                  <TaskForm>
                    <ModalTitle className="flex-title justify-between">
                      Задача
                      <span
                        className="pointer"
                        onClick={() => dispatch(toggleTaskModal())}
                      >
                        <Close />
                      </span>
                    </ModalTitle>

                    <div
                      style={{
                        padding: "20px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "30px",
                      }}
                    >
                      <label>
                        <div>Название</div>
                        <Input name="text" />
                      </label>
                      <label>
                        <div>Дата завершения</div>
                        <Input name="date" type="date" />
                      </label>

                      <label>
                        <Field name="category" type="checkbox" /> Важная задача
                      </label>

                      {/* <label>
                        <div>Описания задачи</div>
                        <Textarea as="textarea" />
                      </label> */}

                      <div className="flex-tags" style={{ gap: "10px" }}>
                        <div>
                          <label style={{ marginBottom: "12px" }}>
                            <Field
                              name="tags"
                              value="productivity"
                              type="checkbox"
                            />
                            Продуктивность
                          </label>
                          <label>
                            <Field
                              name="tags"
                              value="education"
                              type="checkbox"
                            />
                            Образования
                          </label>
                        </div>
                        <div>
                          <label style={{ marginBottom: "12px" }}>
                            <Field name="tags" value="health" type="checkbox" />
                            Здоровье
                          </label>
                          <label>
                            <Field
                              name="tags"
                              value="important"
                              type="checkbox"
                            />
                            Срочно
                          </label>
                        </div>
                      </div>

                      <div>
                        <Button style={{ marginRight: "10px" }}>
                          Добавить
                        </Button>
                        <Button
                          outlined
                          onClick={() => dispatch(toggleTaskModal())}
                        >
                          Удалить
                        </Button>
                      </div>
                    </div>
                  </TaskForm>
                );
              }}
            </Formik>
          </Overlay>,
          document.getElementById("modal-root") as HTMLElement
        )}
    </>
  );
};
