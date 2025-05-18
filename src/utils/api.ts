
interface SubmitEmailResponse {
  success: boolean;
  message: string;
}

export const submitEmail = async (email: string): Promise<SubmitEmailResponse> => {
  try {
    const response = await fetch('https://sheetdb.io/api/v1/ozh2aa4b5rh9f', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: [{ email }] }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      console.error('API error:', errorData || response.statusText);
      throw new Error('Network response was not ok');
    }

    return {
      success: true,
      message: 'Thank you for joining our waitlist!',
    };
  } catch (error) {
    console.error('Error submitting email:', error);
    return {
      success: false,
      message: 'There was an error submitting your email. Please try again.',
    };
  }
};
