import React, { FunctionComponent } from "react";
import FormMol from "../../../components/molecules/form";
import { Container, Segment, Header } from "semantic-ui-react";
import { req } from "../../../utill/axios";

const ModAccoutOrg: FunctionComponent<{}> = ({}) => {
  const submit = async (e: any) => {
    const res = await req
      .put("/users/" + e.name, { password: e.pass })
      .catch(console.log);
    if (!res) return;
    console.log("success", res.data);
  };

  return (
    <div>
      <Container>
        <Segment>
          <Header>Update</Header>
          <FormMol
            inputs={["name", "pass"]}
            submit={submit}
            submitLabel="change"
          />
        </Segment>
      </Container>
    </div>
  );
};

export default ModAccoutOrg;
