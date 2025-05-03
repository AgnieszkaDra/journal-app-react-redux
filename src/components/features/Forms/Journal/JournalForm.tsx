import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../store/store';
import { createJournalEntry } from '../../../../store/thunks/createJournalEntry';
import { FormField } from '../../../ui/FormField/FormField';

type FormValues = {
  content: string;
};

const JournalForm = () => {
  const dispatch = useDispatch<AppDispatch>();

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isSubmitting },
    reset,
  } = useForm<FormValues>({ defaultValues: { content: '' } });

  const onSubmit = async ({ content }: FormValues) => {
    try {
      await dispatch(
        createJournalEntry({
          content,
          date: new Date().toISOString(),
          getFormattedDate: function (): string {
            throw new Error('Function not implemented.');
          }
        })
      );
      reset();
    } catch (err) {
      console.error('Failed to create entry:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormField
        label="Content"
        nameInput="content"
        type="textarea"
        rows={5}
        errors={errors}
        touched={touchedFields}
        {...register('content', {
          required: 'Content is required',
          minLength: {
            value: 5,
            message: 'Content must be at least 5 characters',
          },
        })}
      />
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Adding...' : 'Dodaj wpis'}
      </button>
    </form>
  );
};

export default JournalForm;