import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

type AlumniProfileProps = {
  name: string;
  role: string;
  image?: string;
  gradYear: string;
  linkedIn?: string;
};

export function AlumniProfile({ name, role, image, gradYear, linkedIn }: AlumniProfileProps) {
    return (
        <div className="flex flex-col items-center bg-[#50463F] rounded-xl w-full max-w-sm min-h-[480px] p-10 sm:p-12">
            {/* Top Section */}
            <img
                src={image ? image : "images/circle-user-solid-full.svg"}
                width="120px"
                alt={image ? "Alumni photo" : "default photo"}
                className="rounded-full outline outline-4 outline-bla-cream object-cover"
            />
            <h3 className="pt-6 text-bla-cream text-[1.75rem] font-semibold text-center">{name}</h3>
            <h4 className="pt-3 text-[1.25rem] text-bla-cream opacity-80 text-center flex-grow">{role}</h4>

            {/* Bottom Section */}
            <div className="w-full mt-auto space-y-4">
                <div className="w-fit mx-auto px-4 py-1 rounded-full bg-[#6B6259] text-center">
                <p className="text-[1rem] text-bla-cream opacity-70">Class Of {gradYear}</p>
              </div>
              {linkedIn ? (
                  <a
                      href={linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-full bg-[#6B6259] text-bla-cream text-base font-medium border-2 border-[rgba(191,184,175,0.6)] hover:bg-[#7A6F64] hover:border-bla-cream transition-all"
                  >
                      <FontAwesomeIcon icon={faLinkedin} size="lg" />
                      LinkedIn
                  </a>
              ) : (
                  <button
                      disabled
                      className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-full bg-[#6B6259]/50 text-bla-cream/40 text-base font-medium border-2 border-bla-cream/25"
                  >
                      <FontAwesomeIcon icon={faLinkedin} size="lg" />
                      LinkedIn
                  </button>
              )}
            </div>
        </div>
    );
}
