// libraries
import { type FC } from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';

const ContactForm: FC = () => {
  const { t } = useTranslation();

  const validate = (values: { firstName: string; lastName: string; email: string }) => {
    const errors: Partial<typeof values> = {};

    if (!values.firstName) errors.firstName = t('contacts.contactError');
    if (!values.lastName) errors.lastName = t('contacts.contactError');

    if (!values.email) {
      errors.email = t('contacts.contactError');
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="contact-form">
      <label htmlFor="firstName" className="contact-form-input-title">
        {t('contacts.contactFirstName')}
      </label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div className="input-error">{formik.errors.firstName}</div>
      ) : null}

      <label htmlFor="lastName" className="contact-form-input-title">
        {t('contacts.contactLastName')}
      </label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div className="input-error">{formik.errors.lastName}</div>
      ) : null}

      <label htmlFor="email" className="contact-form-input-title">
        {t('contacts.contactEmail')}
      </label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div className="input-error">{formik.errors.email}</div>
      ) : null}

      <button type="submit" className="btn-link primary">
        {t('contacts.contactSubmit')}
      </button>
    </form>
  );
};

export default ContactForm;
