import {
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Form,
  FormGroup,
  Input,
  InputGroup,
  Label,
  Row,
} from 'reactstrap';
import styled from 'styled-components';
import './OrderForm.css';
import { useState } from 'react';
import { doughTypes, sizes, toppings } from '../../data/optionsData';

const MainLabel = styled(Label)`
  font-weight: 600;
  font-size: 1.2rem;
`;

const InputLabel = styled(Label)`
  font-weight: 500;
  color: var(--grey-light-color);
  margin-left: 1rem;
`;

const LabelSpan = styled.span`
  color: var(--red-color);
`;

const RadioGroup = styled(FormGroup)`
  margin-top: 1rem;
`;

const CustomGroup = styled(FormGroup)`
  margin-top: 3rem !important;
`;

const CheckboxGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px 50px;
`;

const Divider = styled.div`
  height: 2px;
  background-color: var(--grey-light-color);
  margin: 2rem 0;
  opacity: 30%;
`;

const CustomButton = styled(Button)`
  border-radius: 5px;
  background-color: var(--yellow-color);
  color: var(--grey-dark-color);
  font-weight: 600;
  font-size: 1.2rem;
  padding: 1rem;
  flex: 1;
`;

const CardTextDiv = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 600;
`;

const CustomInput = styled(Input)`
  text-align: center;
  font-weight: 600;
  font-size: 1.2rem;
`;

export default function OrderForm() {
  return (
    <section className="form-section">
      <div className="form-content formpage-container">
        <Form>
          <Row>
            <Col md={6}>
              <CustomGroup>
                <MainLabel for="size">
                  Boyut Seç <LabelSpan>*</LabelSpan>
                </MainLabel>
                {sizes.map((size, index) => (
                  <RadioGroup check key={index}>
                    <Input name="size" type="radio" value={size} />
                    <InputLabel check>{size}</InputLabel>
                  </RadioGroup>
                ))}
              </CustomGroup>
            </Col>
            <Col md={6}>
              <CustomGroup>
                <MainLabel for="dough">
                  Hamur Seç <LabelSpan>*</LabelSpan>
                </MainLabel>
                <Input id="dough" name="dough" type="select">
                  <option value="">Hamur Kalınlığı</option>
                  {doughTypes.map((dough, index) => (
                    <option key={index} value={dough}>
                      {dough}
                    </option>
                  ))}
                </Input>
              </CustomGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <CustomGroup>
                <MainLabel for="dough">Ek Malzemeler</MainLabel>
                <p style={{ color: 'var(--grey-light-color)' }}>
                  En az 4, en fazla 10 malzeme seçebilirsiniz.
                </p>
                <CheckboxGrid>
                  {toppings.map((topping, index) => (
                    <FormGroup check key={index}>
                      <Input type="checkbox" name={topping.name} />
                      <Label check>{topping.name}</Label>
                    </FormGroup>
                  ))}
                </CheckboxGrid>
              </CustomGroup>
            </Col>
          </Row>
          <CustomGroup>
            <MainLabel for="fullName">
              Ad Soyad <LabelSpan>*</LabelSpan>
            </MainLabel>
            <Input
              id="fullName"
              name="fullName"
              placeholder="Minimum 3 harf olmak üzere lütfen ad soyadınızı girin"
              type="text"
            />
          </CustomGroup>
          <CustomGroup>
            <MainLabel for="note">Sipariş Notu</MainLabel>
            <Input
              id="note"
              name="note"
              placeholder="Siparişine eklemek istediğin bir not var mı?"
              type="textarea"
            />
          </CustomGroup>
          <Divider />
          <Row>
            <Col md={4}>
              <InputGroup>
                <CustomButton>-</CustomButton>
                <CustomInput value={1} readOnly style={{ padding: '1rem' }} />
                <CustomButton>+</CustomButton>
              </InputGroup>
            </Col>
            <Col md={8}>
              <Card>
                <CardBody style={{ padding: '2rem' }}>
                  <CardTitle tag="h5">Sipariş Toplamı</CardTitle>
                  <CardText className="mt-4">
                    <CardTextDiv style={{ color: 'var(--grey-light-color)' }}>
                      <p>Seçimler</p>
                      <p>25.00₺</p>
                    </CardTextDiv>
                    <CardTextDiv style={{ color: 'var(--red-color)' }}>
                      <p>Toplam</p>
                      <p>110.00₺</p>
                    </CardTextDiv>
                  </CardText>
                </CardBody>
                <CustomButton>SİPARİŞ VER</CustomButton>
              </Card>
            </Col>
          </Row>
        </Form>
      </div>
    </section>
  );
}
