import style from "./App.module.css";
import Input from "./assets/components/Input";
import { useFormik } from "formik";
import * as Yup from "yup";

function App() {
  const FORMIK = useFormik({
    initialValues: {
      name: "",
      email: "",
      age: 0,
      street: "",
      city: "",
      friend: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      age: Yup.number(),
      street: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
      city: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
      friend: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className={style.mainDiv}>
      <div>
        <form onSubmit={FORMIK.handleSubmit}>
          <p>Personal Info:</p>
          <Input
            placeholder="Name"
            id="name"
            name="name"
            onBlur={FORMIK.handleBlur}
            onChange={FORMIK.handleChange}
            value={FORMIK.values.name}
          />
          {FORMIK.touched.name && FORMIK.errors.name ? (
            <div id={style.error}>{FORMIK.errors.name}</div>
          ) : null}
          <Input
            placeholder="Email"
            id="email"
            name="email"
            onBlur={FORMIK.handleBlur}
            onChange={FORMIK.handleChange}
            value={FORMIK.values.email}
          />
          {FORMIK.touched.email && FORMIK.errors.email ? (
            <div id={style.error}>{FORMIK.errors.email}</div>
          ) : null}
          <Input
            placeholder="Age"
            id="age"
            name="age"
            onBlur={FORMIK.handleBlur}
            onChange={FORMIK.handleChange}
            required="false"
            value={FORMIK.values.age}
          />
          {FORMIK.touched.age && FORMIK.errors.age ? (
            <div id={style.error}>{FORMIK.errors.age}</div>
          ) : null}

          <p>Address :</p>
          <Input
            placeholder="Street"
            id="street"
            name="street"
            onBlur={FORMIK.handleBlur}
            onChange={FORMIK.handleChange}
            value={FORMIK.values.street}
          />
          {FORMIK.touched.street && FORMIK.errors.street ? (
            <div id={style.error}>{FORMIK.errors.street}</div>
          ) : null}
          <Input
            placeholder="City"
            id="city"
            name="city"
            onBlur={FORMIK.handleBlur}
            onChange={FORMIK.handleChange}
            value={FORMIK.values.city}
          />
          {FORMIK.touched.city && FORMIK.errors.city ? (
            <div id={style.error}>{FORMIK.errors.city}</div>
          ) : null}

          <p>Friend :</p>
          <Input
            placeholder="Add Freind"
            id="friend"
            name="friend"
            onBlur={FORMIK.handleBlur}
            onChange={FORMIK.handleChange}
            value={FORMIK.values.friend}
          />
          {FORMIK.touched.friend && FORMIK.errors.friend ? (
            <div id={style.error}>{FORMIK.errors.friend}</div>
          ) : null}
          <input type="submit" value="Register" />
        </form>
      </div>
    </div>
  );
}

export default App;
