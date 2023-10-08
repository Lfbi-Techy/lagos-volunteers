import React, { useState } from "react";
import EventDetails from "./EventDetails";
import IconText from "../atoms/IconText";
import CustomCheckbox from "../atoms/Checkbox";
import Button from "../atoms/Button";
import { Modal } from "@mui/material";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface EventRegisterFormProps {
  eventid: string;
}

/**
 * An EventRegisterForm component
 */
const EventRegisterForm = ({ eventid }: EventRegisterFormProps) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    if (checked) {
      setOpen(true);
    }
  };
  const handleClose = () => setOpen(false);
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked((checked) => !checked);
  };
  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <div>lalalaadjfkldasfkl;dajlkfjklsajl</div>
      </Modal>

      <div className="justify-center center-items grid grid-cols-4 grid-rows-6`">
        <div className="space-y-4 col-start-1 col-end-5">
          <div className="flex items-center text-gray-400">
            <IconText icon={<ArrowBackIcon />}>
              <Link href="/events/view/" className="text-gray-400">
                <u>Return to My Events</u>
              </Link>
            </IconText>
          </div>
          <div className="font-semibold text-3xl">Event Registration</div>
          <div className="text-2xl font-semibold mb-6">EDUFOOD</div>
          <EventDetails
            location="Address, Building Name"
            datetime="02/15/2023, 9:00AM-11:00AM"
            supervisors={["Jane Doe", "Jess Lee"]}
            capacity={20}
            image_src="https://i0.wp.com/roadmap-tech.com/wp-content/uploads/2019/04/placeholder-image.jpg?resize=800%2C800&ssl=1"
            tags={["In-person", "EDUFOOD"]}
          />
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam
            in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis
            ligula consectetur, ultrices mauris.
          </div>
          <div className="font-bold pt-4">Terms and Conditions</div>
          <div>
            By registering, I agree that I will attend the event. If I cannot
            attend, I will cancel my registration at least 24 hours before the
            event begins. Failure to cancel my registration may negatively
            impact my status as a volunteer.
          </div>
          <CustomCheckbox
            label="I agree to the terms and conditions"
            onChange={handleChange}
            checked={checked}
          />
        </div>
        <div className="col-start-1 col-end-5 pt-4 md:col-start-2 md:col-end-4 md:pt-8">
          <Button
            children="Register"
            color="gray"
            onClick={handleOpen}
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default EventRegisterForm;
