-- Create table for tracking completed AWS services
CREATE TABLE public.service_completions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  service_name TEXT NOT NULL,
  completed BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  
  -- Ensure one record per service
  UNIQUE(service_name)
);

-- Enable Row Level Security
ALTER TABLE public.service_completions ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (no auth required)
CREATE POLICY "Anyone can view service completions" 
ON public.service_completions 
FOR SELECT 
USING (true);

CREATE POLICY "Anyone can create service completions" 
ON public.service_completions 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can update service completions" 
ON public.service_completions 
FOR UPDATE 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
NEW.updated_at = now();
RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_service_completions_updated_at
BEFORE UPDATE ON public.service_completions
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();