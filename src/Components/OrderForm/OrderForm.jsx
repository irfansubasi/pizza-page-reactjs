import {
  Button,
  CardBody,
  CardTitle,
  Form,
  FormGroup,
  Input,
  InputGroup,
  Label,
} from 'reactstrap';
import styled from 'styled-components';
import './OrderForm.css';
import { useEffect, useState } from 'react';
import { doughTypes, sizes, toppings } from '../../data/optionsData';
import {
  doughTypePrices,
  foodPrices,
  ingredientPrice,
  pizzaSizePrices,
} from '../../data/priceData';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const MainLabel = styled(Label)`
  font-weight: 600;
  font-size: 1.2rem;
`;

const LabelSpan = styled.span`
  color: var(--red-color);
`;

const CustomGroup = styled(FormGroup)`
  display: flex;
  flex-direction: column;
  gap: 20px;
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

  &:disabled {
    cursor: default;
    color: var(--white-color);
    background-color: var(--grey-light-color);
  }
`;

const CardTextDiv = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 600;
`;

const CardTextOuterDiv = styled.div`
  font-weight: 600;
`;

const CustomInput = styled(Input)`
  text-align: center;
  font-weight: 600;
  font-size: 1.2rem;
`;

const FlexGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CustomRadioGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const CustomRadioLabel = styled.label`
  display: inline-block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--beige-color);
  color: var(--grey-light-color);
  border: none;
  text-align: center;
  line-height: 50px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  input[type='radio']:checked + & {
    background-color: var(--yellow-color);
    border: 2px solid var(--dark-yellow-color);
    color: var(--white-color);
  }
`;

const CustomSelect = styled.select`
  padding: 1rem 1rem;
  background-color: var(--beige-color);
  color: var(--grey-light-color);
  width: 200px;
  border: none;
  outline: none;
`;

const CustomCard = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--grey-light-color);
  background-color: var(--beige-color);
  border: 1px solid hsla(0, 0%, 50%, 0.2);
  border-radius: 5px;
`;

export default function OrderForm() {
  const [formData, setFormData] = useState({
    food: 'Position Absolute Acı Pizza',
    size: sizes[0].value,
    dough: doughTypes[0].value,
    extras: [],
    fullName: '',
    note: '',
    extrasPrice: '',
    price: '',
  });

  const [quantity, setQuantity] = useState(1);

  const [error, setError] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    validateForm();
    calculatePrice();
  }, [formData]);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      if (checked) {
        setFormData({
          ...formData,
          extras: [...formData.extras, value],
        });
      } else {
        setFormData({
          ...formData,
          extras: formData.extras.filter((topping) => topping !== value), //
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  }

  function validateForm() {
    if (formData.extras.length < 4 || formData.extras.length > 10) {
      setError(true);
    } else if (formData.fullName.length < 3) {
      setError(true);
    } else {
      setError(false);
    }
  }

  function increaseQuantity() {
    setQuantity((prevQuantity) => prevQuantity + 1);
  }

  function decreaseQuantity() {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post('https://reqres.in/api/orderedpizzas', formData)
      .then((res) => {
        console.log(res.data);
        navigate('/success', { state: { formData } });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function calculatePrice() {
    let totalPrice = 0;
    const selectedFood = foodPrices.find((food) => food.name === formData.food);
    const foodPrice = selectedFood ? selectedFood.value : 0;

    totalPrice =
      (foodPrice +
        pizzaSizePrices[formData.size] +
        doughTypePrices[formData.dough] +
        formData.extras.length * ingredientPrice) *
      quantity;

    let extrasPrice = formData.extras.length * ingredientPrice;

    setFormData((prevData) => ({
      ...prevData,
      extrasPrice: extrasPrice.toFixed(2),
    }));

    setFormData((prevData) => ({
      ...prevData,
      price: totalPrice.toFixed(2),
    }));
  }

  return (
    <section className="form-section">
      <div className="form-content formpage-container">
        <Form onSubmit={handleSubmit}>
          <FlexGroup>
            <CustomGroup>
              <MainLabel for="size">
                Boyut Seç <LabelSpan>*</LabelSpan>
              </MainLabel>
              <CustomRadioGroup check>
                {sizes.map((size, index) => (
                  <div key={index}>
                    <Input
                      style={{ display: 'none' }}
                      id={size.label}
                      name="size"
                      type="radio"
                      value={size.value}
                      onChange={handleChange}
                      checked={formData.size === size.value}
                    />
                    <CustomRadioLabel htmlFor={size.label} check>
                      {size.label}
                    </CustomRadioLabel>
                  </div>
                ))}
              </CustomRadioGroup>
            </CustomGroup>
            <CustomGroup>
              <MainLabel for="dough">
                Hamur Seç <LabelSpan>*</LabelSpan>
              </MainLabel>
              <CustomSelect
                onChange={handleChange}
                id="dough"
                name="dough"
                type="select"
                value={formData.dough}
              >
                {doughTypes.map((dough, index) => (
                  <option key={index} value={dough.value}>
                    {dough.label}
                  </option>
                ))}
              </CustomSelect>
            </CustomGroup>
          </FlexGroup>
          <CustomGroup>
            <MainLabel for="dough">
              Ek Malzemeler <LabelSpan>*</LabelSpan>
            </MainLabel>
            <p
              style={{
                color: 'var(--grey-light-color)',
                marginBottom: '2rem',
              }}
            >
              En az 4, en fazla 10 malzeme seçebilirsiniz.
            </p>
            <CheckboxGrid>
              {toppings.map((topping, index) => (
                <FormGroup check key={index}>
                  <div className="custom-checkbox">
                    <Input
                      className="checkbox"
                      style={{ display: 'none' }}
                      id={topping.label}
                      data-cy="checkbox"
                      onChange={handleChange}
                      type="checkbox"
                      name={topping.name}
                      value={topping.name}
                    />
                    <Label for={topping.label} check>
                      {topping.name}
                    </Label>
                  </div>
                </FormGroup>
              ))}
            </CheckboxGrid>
          </CustomGroup>
          <CustomGroup>
            <MainLabel for="fullName">
              Ad Soyad <LabelSpan>*</LabelSpan>
            </MainLabel>
            <Input
              data-cy="nameinput"
              id="fullName"
              name="fullName"
              placeholder="Minimum 3 harf olmak üzere lütfen ad soyadınızı girin"
              type="text"
              onChange={handleChange}
            />
          </CustomGroup>
          <CustomGroup>
            <MainLabel for="note">Sipariş Notu</MainLabel>
            <Input
              id="note"
              name="note"
              placeholder="Siparişine eklemek istediğin bir not var mı?"
              type="textarea"
              onChange={handleChange}
            />
          </CustomGroup>
          <Divider />
          <div className="results">
            <InputGroup className="quantity-group">
              <CustomButton onClick={decreaseQuantity}>-</CustomButton>
              <CustomInput
                value={quantity}
                readOnly
                style={{ padding: '1rem' }}
              />
              <CustomButton onClick={increaseQuantity}>+</CustomButton>
            </InputGroup>
            <CustomCard>
              <CardBody style={{ padding: '2rem' }}>
                <CardTitle tag="h5">Sipariş Toplamı</CardTitle>
                <CardTextOuterDiv style={{ margin: '1rem 0' }}>
                  <CardTextDiv
                    style={{
                      color: 'var(--grey-light-color)',
                      marginBottom: '1rem',
                    }}
                  >
                    <span>Seçimler</span>
                    <span>{formData.extrasPrice}₺</span>
                  </CardTextDiv>
                  <CardTextDiv style={{ color: 'var(--red-color)' }}>
                    <span>Toplam</span>
                    <span>{formData.price}₺</span>
                  </CardTextDiv>
                </CardTextOuterDiv>
              </CardBody>
              <CustomButton data-cy="submitbutton" disabled={error}>
                SİPARİŞ VER
              </CustomButton>
            </CustomCard>
          </div>
        </Form>
        <ToastContainer />
      </div>
    </section>
  );
}
