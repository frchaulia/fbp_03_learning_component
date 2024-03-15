interface CardProops {
    title: any;
    children: any;
  }  
function Card({ title, children } :CardProops) {
    return (
      <div className="card">
        <div className="card-content">
          <h1>{title}</h1>
          {children}
        </div>
      </div>
    );
  }
  
  export default function MyProfile2() {
    return (
      <div>
        <Card title="Foto">
          <img
            className="avatar"
            src="https://i.imgur.com/OKS67lhm.jpg"
            alt="Aklilu Lemma"
            width={70}
            height={70}
          />
        </Card>
        <Card title="Tentang">
          <p>Aklilu Lemma adalah seorang ilmuwan terkemuka dari Ethiopia yang telah menemukan pengobatan alami untuk skistosomiasis.</p>
        </Card>
      </div>
    );
  }
  