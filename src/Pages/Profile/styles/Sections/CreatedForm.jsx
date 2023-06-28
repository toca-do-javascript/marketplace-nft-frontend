import styled from 'styled-components';

export const CreatedForm = styled.form`
  max-width: 68.6875rem;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  color: #fff;
  margin-top: 3rem;
  margin-bottom: 20.4375rem;
  display: flex;
  align-items: center;
  flex-direction: column;

  form {
    width: 100%;
    .files-upload {
      label {
        width: 100%;
        min-height: 45.5625rem;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.17);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 1.375rem;
        cursor: pointer;

        span {
          margin-top: 8.5625rem;
          color: #2d64fa;
        }

        img {
          width: 3.875rem;
          height: 4.3125rem;
        }

        p {
          color: var(--default-text-color);
        }
        input {
          display: none;
        }
      }
    }
  }

  .area-inputs {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 7.125rem;
    margin-bottom: 2.75rem;
    span {
      display: flex;
      flex-direction: column;
      gap: 1.4375rem;
      min-width: 27.875rem;
      width: 100%;
      input,
      textarea {
        margin-bottom: 53px;
        color: var(--default-text-color);
        background-color: rgba(152, 152, 152, 0.2);
        border: none;
        border-radius: 4px;
        font-size: 16px;
        padding: 0.875rem 0.5rem;
        :focus {
          outline: none;
        }
      }
      textarea {
        resize: none;
        height: 7rem;
      }
    }
  }
`;
